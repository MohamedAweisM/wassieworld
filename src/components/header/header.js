import React from "react";

import discordLogo from "../../assets/icons/discordlogoblack.png";
import solanaLogo from "../../assets/icons/solanalogoblack.png";
import twitterLogo from "../../assets/icons/twitterlogoblack.png";
import wassieworld from "../../assets/texts/wassieworld.png";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.wwLogo} src={wassieworld} alt="Wassie World Logo"/>
        <div className={styles.socialLogos}>
          <a href="https://discord.gg/VWKcFRKdjK">
            <img className={styles.discord} src={discordLogo} alt="Discord logo"/>
          </a>
          <img className={styles.solana} src={solanaLogo} alt="Solana logo"/>
          <a href="https://twitter.com/Wassieworld">
            <img className={styles.twit} src={twitterLogo} alt="Twitter logo"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
