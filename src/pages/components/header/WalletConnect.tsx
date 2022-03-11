import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRecoilState } from "recoil";
// import { useSolana } from "../../hooks/useSolana";
// import { CandyMachineAccount } from "../../utils/models";
// import { connectWallet, existsOwnerSPLToken, getUserBalance } from "../../utils/state-helpers";
import { userStore } from "../../../utils/store";
import styles from "./walletConnect.module.scss";

const WalletConnect = () => {
//   candyMachine,
//   connection,
// }: {
//   candyMachine: CandyMachineAccount,
//   connection: Connection,
// }) => {
  // const { solana } = useSolana()
  const [user, setUser] = useRecoilState(userStore);
  const userConnected = user?.walletPublicKey ? true : false;

  // const handleClick = async () => {
  //   const walletPublicKey = await connectWallet(solana);
  //   const userBalance = walletPublicKey && connection ? await getUserBalance(walletPublicKey, connection) : undefined;
  //   const isWhiteListed = walletPublicKey && connection
  //   ? await existsOwnerSPLToken(
  //       walletPublicKey,
  //       connection,
  //       candyMachine?.state.whitelistMintSettings?.mint,
  //     )
  //   : undefined;
  //   const newUser = {
  //     walletPublicKey,
  //     ...(userBalance && { userBalance }),
  //     ...(isWhiteListed && { isWhiteListed }),
  //   };
  //   setUser({ ...user, ...newUser });
  // };

  return (
    <div>
      <div className={styles.addressContainer}>
        <span className={userConnected ? styles.greenCircle : styles.greyCircle} />
        <span className={styles.address}>
          {userConnected
            ? `${user.walletPublicKey?.slice(0, 4)}...${user.walletPublicKey?.slice(-4)}`
            : 'Not connected'
          }
        </span>
      </div>
      {userConnected && (
        <div className={styles.balance}>
          {(user.userBalance / LAMPORTS_PER_SOL).toFixed(2)} SOL
        </div>
      )}
    </div>
  );

  // return (
  //   <button className={styles.headerButton} onClick={handleClick}>
  //     Connect Wallet
  //   </button>
  // );
};

export default WalletConnect;
