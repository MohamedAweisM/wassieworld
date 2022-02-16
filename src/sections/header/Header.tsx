// import { Connection } from "@solana/web3.js";

import discordLogo from "../../assets/icons/discordlogoblack.png";
import twitterLogo from "../../assets/icons/twitterlogoblack.png";
import wassieworld from "../../assets/texts/wassieworld.png";
// import { CandyMachineAccount } from "../../utils/models";

import styles from "./header.module.scss";
import WalletConnect from "./WalletConnect";

const Header = () => {
// ({
//   candyMachine,
//   connection,
// }: {
//   candyMachine: CandyMachineAccount,
//   connection: Connection,
// }) => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerLeft}>
          <img className={styles.wwLogo} src={wassieworld} alt="Wassie World Logo"/>
          {/* <a> About </a>
          <a> Roadmap </a>
          <a> Utility </a>
          <a> Team </a> */}
        </div>
        <div className={styles.headerRight}>
          <a
            href="https://twitter.com/Wassieworld"
            target="_blank"
            rel="noreferrer">
            <img className={styles.socialIcon} src={twitterLogo} alt="Twitter logo"/>
          </a>
          <a
            href="https://discord.gg/VWKcFRKdjK"
            target="_blank"
            rel="noreferrer">
            <img className={styles.socialIcon} src={discordLogo} alt="Discord logo"/>
          </a>
          <WalletConnect />
            {/* candyMachine={candyMachine}
            connection={connection}/> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
