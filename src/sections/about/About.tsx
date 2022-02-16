import aboutWassie from '../../assets/aboutWassie.png';
import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={aboutWassie} alt='about pic'/>
        <div className={styles.about}>
          <h2 className={styles.title}> About </h2>
          <p>
            Wassie World is the genesis NFT collection of the Wassie World team.
            The art features the beloved Wassie, rendered in 3D, and sporting <span>210+ </span>
            different, randomly generated traits. The artwork is inspired by various
            elements from <span>fashion, art, music, sports, and pop culture</span>.
          </p>
          <p>
            The focus of this project is to provide holders with tangible benefits
            that support <span>mental health, personal growth, education and community</span>.
          </p>
          <p>
            This NFT collection lives on the <span>Solana</span> blockchain and it provides holders
            with a <span>safe</span> (fully doxxed team), <span>affordable</span> (only 0.66 SOL + extremely
            low gas fee) and <span>easy</span> (we will walk you through buying process) entry
            into the NFT space. Join our <a href='https://discord.gg/VWKcFRKdjK' target="_blank" rel="noreferrer">
            <span>discord</span></a> for more info!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
