import { web3 } from '@project-serum/anchor';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import confetti from 'canvas-confetti';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useEnv } from '../../hooks/useEnv';
import { useSolana } from '../../hooks/useSolana';
import { awaitTransactionSignatureConfirmation } from '../../utils/connection';
import { mintOneToken } from '../../utils/mint';
import { CandyMachineAccount } from '../../utils/models';
import { connectWallet, existsOwnerSPLToken, getUserBalance } from '../../utils/state-helpers';
import { userStore } from '../../utils/store';
import styles from './mintButton.module.scss';

const MintButton = ({
  candyMachine,
  updateCandyMachine,
  connection,
  setMintError,
}: {
  candyMachine: CandyMachineAccount
  updateCandyMachine: (candyMachine: CandyMachineAccount) => void,
  connection: Connection,
  setMintError: (isError: boolean) => void,
}) => {
  const { cluster } = useEnv();
  const { solana } = useSolana();

  const [user, setUser] = useRecoilState(userStore);
  const [isMinting, setIsMinting] = useState(false);

  const txTimeout = 30000;
  const price = candyMachine?.state.price;
  const whitelistPrice = candyMachine?.state.whitelistMintSettings?.discountPrice;
  const isSoldOut = candyMachine?.state.isSoldOut;
  const userWhitelisted = user?.isWhiteListed;

  const insufficientFunds = userWhitelisted
    ? user?.userBalance < whitelistPrice
    : user?.userBalance < price;

  const walletConnect = async () => {
    const walletPublicKey = await connectWallet(solana);
    const userBalance = walletPublicKey && connection ? await getUserBalance(walletPublicKey, connection) : undefined;
    const isWhiteListed = walletPublicKey && connection
    ? await existsOwnerSPLToken(
        walletPublicKey,
        connection,
        candyMachine?.state.whitelistMintSettings?.mint,
      )
    : undefined;
    const newUser = {
      walletPublicKey,
      ...(userBalance && { userBalance }),
      ...(isWhiteListed && { isWhiteListed }),
    };
    setUser({ ...user, ...newUser });
  };

  const mint = async () => {
    try {
      setIsMinting(true);
      setMintError(false);
      if (candyMachine?.program && user?.walletPublicKey) {
        const mint = web3.Keypair.generate();
        const mintTxId = (
          await mintOneToken(
            candyMachine,
            new web3.PublicKey(user.walletPublicKey),
            mint
          )
        )[0];
        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            txTimeout,
            connection as Connection,
            "singleGossip",
            true
          );
        }
        if (!status?.err) {
          console.log("Success");
          displaySuccess(mint.publicKey);
        } else {
          console.error("An error occurred");
          setMintError(true);
        }
      }
    } catch (error: any) {
      console.error("An error occurred ", error);
      setMintError(true);
    } finally {
      setIsMinting(false);
    }
  }

  const displaySuccess = async (mintPublicKey: web3.PublicKey) => {
    // It takes time before state change is cascaded across the network
    // so we update this variables manually upon successful completion
    if (candyMachine) {
      const solanaExplorerLink =
        cluster === "devnet"
          ? `https://explorer.solana.com/address/${mintPublicKey}?cluster=devnet`
          : `https://explorer.solana.com/address/${mintPublicKey}`;

      const newCandyMachine = candyMachine;
      newCandyMachine.state.itemsRedeemed += 1;
      
      updateCandyMachine(newCandyMachine);
      setUser({ ...user, solanaExplorerLink });
  
      throwConfetti();
    }
  }

  const throwConfetti = (): void => {
    const small = {
      particleCount: 200,
      spread: 90,
      origin: { y: -0.5 },
    };

    const large = {
      scalar: 1.2,
      startVelocity: 60,
      particleCount: 350,
      spread: 180,
      origin: { y: -0.3 },
    };

    const opts = window.innerWidth >= 425 ? large : small;

    confetti({
      ...opts,
      angle: 270,
    });
  }

  const getButtonType = () => {
    if (isSoldOut) return 'soldOut'
    if (!solana) return 'getPhantom'
    if (!user.walletPublicKey) return 'connectWallet'
    if (insufficientFunds) return 'insufficientFunds'
    if (isMinting) return 'minting'
    return 'mint';
  }

  const buttonStyle = {
    soldOut: styles.soldOut,
    getPhantom: styles.getPhantom,
    connectWallet: styles.connectWallet,
    insufficientFunds: styles.insufficientFunds,
    minting: styles.minting,
    mint: styles.mint,
  };

  const buttonText = {
    soldOut: 'Sold Out!',
    getPhantom: 'Get Phantom',
    connectWallet: 'Connect Wallet',
    insufficientFunds: `Insufficient Funds 
      (${((userWhitelisted ? whitelistPrice : price) / LAMPORTS_PER_SOL).toFixed(2)} 
      SOL required)`,
    minting: 'Minting...',
    mint: `Mint 
      (${((userWhitelisted ? whitelistPrice : price) / LAMPORTS_PER_SOL).toFixed(2)} 
      SOL)`
  };

  const buttonClick = {
    soldOut: () => {},
    getPhantom: () => window.open("https://phantom.app/", "_blank"),
    connectWallet: walletConnect,
    insufficientFunds: () => {},
    minting: () => {},
    mint: mint,
  }

  const buttonType = getButtonType();

  return (
    <button id='mint-button' className={buttonStyle[buttonType]} onClick={buttonClick[buttonType]}>
      {buttonText[buttonType]}
    </button>
  );
};

export default MintButton;
