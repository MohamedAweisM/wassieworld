import { useState } from 'react';
import { useRecoilState } from "recoil";
import confetti from 'canvas-confetti';
import { web3 } from '@project-serum/anchor';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

import { userStore } from "./lib/store";
import { mintOneToken } from './lib/mint';
import {
  getUserBalance,
  existsOwnerSPLToken,
  connectWallet,
} from './lib/state-helpers';
import { awaitTransactionSignatureConfirmation } from './lib/connection';
import { CandyMachineAccount } from './models';

const Button = ({ cluster, connection, candyMachine, updateCandyMachine }: {
  cluster: string | undefined,
  connection: Connection | undefined,
  candyMachine: CandyMachineAccount | undefined,
  updateCandyMachine: (candyMachine: CandyMachineAccount) => void,
}) => {
  const solana = (window as any).solana;
  const [user, setUser] = useRecoilState(userStore);
  
  const [isMinting, setIsMinting] = useState(false);
  const [mintSuccessful, setMintSuccessful] = useState(false);

  const txTimeout = 30000;
  const date = new Date(candyMachine?.state.goLiveDate?.toNumber() * 1000);
  const price = candyMachine?.state.price;
  const whitelistPrice = candyMachine?.state.whitelistMintSettings?.discountPrice;
  const isActive = candyMachine?.state.isActive;
  const isSoldOut = candyMachine?.state?.isSoldOut;
  const userWhitelisted = user?.isWhiteListed;

  const connectWalletButton = async () => {
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
        }
      }
    } catch (error: any) {
      console.error("An error occurred ", error);
    } finally {
      setIsMinting(false);
    }
  }

  const throwConfetti = (): void => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  const displaySuccess = (mintPublicKey: web3.PublicKey) => {
    // It takes time before state change is cascaded across the network
    // so we update this variables manually upon successful completion
    if (candyMachine) {
      let solanaExplorerLink =
        cluster === "devnet"
          ? `https://explorer.solana.com/address/${mintPublicKey}?cluster=devnet`
          : `https://explorer.solana.com/address/${mintPublicKey}`;

      let newCandyMachine = candyMachine;
      newCandyMachine.state.itemsRedeemed += 1;
      
      updateCandyMachine(newCandyMachine);
      setMintSuccessful(true);
      setUser({ ...user, solanaExplorerLink });
  
      throwConfetti();
    }
  }

  const soldOut = isSoldOut;
  const getPhantom = !isSoldOut && !solana;
  const walletConnect = !isSoldOut && solana && !user.walletPublicKey;
  const waitForPublic = !isSoldOut && solana && user.walletPublicKey && !isActive && !userWhitelisted;
  const insufficientFunds = !soldOut && solana && user.walletPublicKey && (isActive || userWhitelisted) && user.userBalance < price;
  const readyToMint = !isSoldOut && solana && user.walletPublicKey && (isActive || userWhitelisted);

  return (
    <div className="flex flex-col">
      {getPhantom && (
        <button
          className=" px-3 py-2 rounded-md  bg-blue-600  hover:bg-blue-700 text-white font-bold"
          onClick={() => window.open("https://phantom.app/", "_blank")}>
            Get Phantom Wallet
        </button>
      )}
      {walletConnect && (
        <button
          className=" px-3 py-2 rounded-md  bg-blue-600  hover:bg-blue-700 text-white font-bold"
          onClick={connectWalletButton}>
            Connect
        </button>
      )}
      {waitForPublic && (
        <button
          className=" px-3 py-2 rounded-md text-white font-bold bg-gray-400 cursor-not-allowed"
          disabled>
            Public sale starts {date.toUTCString()}
        </button>
      )}
      {soldOut && (
        <button className=" px-3 py-2 rounded-md  bg-gray-400 text-white font-bold cursor-not-allowed">
          Sold Out!
        </button>
      )}
      {insufficientFunds && (
        <button
          className=" px-3 py-2 rounded-md  bg-gray-400 text-white font-bold cursor-not-allowed"
          disabled={true}>
            Insufficient Funds ({(
            (userWhitelisted ? whitelistPrice : price) / LAMPORTS_PER_SOL
          ).toFixed(2)} SOL required)
        </button>
      )}
      {readyToMint && (
        <button
          className=" px-3 py-2 rounded-md  bg-blue-600  hover:bg-blue-700 text-white font-bold disabled:bg-gray-400"
          disabled={isMinting}
          onClick={mint}>
          {isMinting && <span>Minting ...</span>}
          {!isMinting && mintSuccessful && <span>Mint succesful! Mint another?</span>}
          {!isMinting && !mintSuccessful && (
            <span> Mint ({(
                (userWhitelisted ? whitelistPrice : price) / LAMPORTS_PER_SOL).toFixed(2)} SOL)
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default Button;
