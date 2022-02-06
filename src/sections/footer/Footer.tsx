import styles from './footer.module.scss';
import wwLogo from "../../assets/texts/wassieworld.png";
import discordLogo from "../../assets/icons/discordlogoblack.png";
import twitterLogo from "../../assets/icons/twitterlogoblack.png";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <img className={styles.wwLogo} src={wwLogo} alt="Wassie World Logo"/>
        <span className={styles.copyright}> Wassie World . Copyright 2022 </span>
        <div className={styles.socialLinks}>
            <a href="https://twitter.com/Wassieworld">
              <img className={styles.socialIcon} src={twitterLogo} alt="Twitter logo"/>
            </a>
            <a href="https://discord.gg/VWKcFRKdjK">
              <img className={styles.socialIcon} src={discordLogo} alt="Discord logo"/>
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
