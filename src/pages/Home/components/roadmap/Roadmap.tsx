import roadmap_1 from '../../../../assets/roadmap/roadmap_1.png';
import roadmap_2 from '../../../../assets/roadmap/roadmap_2.png';
import roadmap_3 from '../../../../assets/roadmap/roadmap_3.png';
import roadmap_4 from '../../../../assets/roadmap/roadmap_4.png';

import styles from './roadmap.module.scss';

const Roadmap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.roadmap}>
          <h2 className={styles.title}> Roadmap </h2>
          <img className={styles.lilyPad} src={roadmap_1} alt='genesis' />
          <img className={styles.lilyPad} src={roadmap_2} alt='wassie warriors' />
          <img className={styles.lilyPad} src={roadmap_3} alt='wassie wearables' />
          <img className={styles.lilyPad} src={roadmap_4} alt='wassie ponds' />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
