import Slider from "./Slider";
import { allTraits } from "./Traits";

const LookBook = () => {
  return (
    <div>
      {allTraits.map(trait => (
        <div key={trait.type}>
          <h2>{trait.type + 's'}</h2>
          <Slider traitType={trait.type} traitList={trait.list} />
        </div>
      ))}
    </div>
  );
};

export default LookBook;
