import LookBookTrait from "./LookBookTrait";

import styles from './lookBook.module.scss'

const Slider = ({ traitType, traitList }: any) => {

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sliderTitle}>{traitType}</h2>

      <div className={styles.sliderContent}>
        <div className={styles.slider}>
          {traitList.map((trait: any) => (
            <LookBookTrait
              key={`${traitType}_${trait.name}`}
              traitType={traitType}
              trait={trait} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
