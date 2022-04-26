import maintenanceWassie from '../../assets/maintenance.png';
import wassieGif from '../../assets/wassie.gif';
import { Header } from '../components';
import styles from './maintenance.module.scss';

const Maintenance = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.pageContent}>
        <div className={styles.headings}>
          <h1> This site is currently undergoing maintenance </h1>
          <h2> We are working to improve our website ahead of Phase 2 minting coming in May, 2022! </h2>
        </div>

        <img className={styles.wassie} src={maintenanceWassie} alt="Maintenance Wassie"/>

        <div className={styles.links}>
          <p> In the meantime... </p>
          <a
            href="https://discord.gg/VWKcFRKdjK"
            target="_blank"
            rel="noreferrer">
            Click here to join the Phase 2 whitelist
          </a>
          <a
            href="https://discord.gg/VWKcFRKdjK"
            target="_blank"
            rel="noreferrer">
            Click here to join our Discord
          </a>
          <a
            href="https://wassieworld.xyz/#/lookbook"
            target="_blank"
            rel="noreferrer">
            Click here to see trait Lookbook
          </a>
        </div>

        <img className={styles.wassie} src={wassieGif} alt={'Wassie gif'}/>
      </main>
    </div>
  );
};

export default Maintenance;
