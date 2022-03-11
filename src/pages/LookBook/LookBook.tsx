import Slider from "./Slider";
import { allTraits } from "./Traits";

import styles from './lookBook.module.scss';
import { Header } from "../components";

const LookBook = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.pageContent}>
        <h1 className={styles.pageTitle}> Trait Look Book </h1>

        {allTraits.map(trait => (
          <Slider
            key={trait.type}
            traitType={trait.type}
            traitList={trait.list} />
        ))}
      </main>
    </div>
  );
};

export default LookBook;
