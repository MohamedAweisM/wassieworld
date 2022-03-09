import Slider from "./Slider";
import { allTraits } from "./Traits";

import styles from './lookBook.module.scss';
import { Header } from "../sections";

const LookBook = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.pageContent}>
        <h1 className={styles.pageTitle}> Wassie World Look Book </h1>

        {allTraits.map(trait => (
          <Slider
            key={trait.type}
            traitType={trait.type}
            traitList={trait.list} />
        ))}
      </div>
    </div>
  );
};

export default LookBook;
