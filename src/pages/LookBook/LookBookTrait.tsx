import styles from './lookBook.module.scss';

const LookBookTrait = ({ traitType, trait }: any) => {
  const { name, image, rarity } = trait;

  return (
    <div className={styles.slide}>
      <h3 className={styles.traitName}>{`"${name}"`}</h3>
      <img
        className={styles.traitImage}
        src={image}
        alt={`${name} ${traitType} trait`}
      />
      <p className={styles.traitRarity}>{`${rarity}%`}</p>
    </div>
  );
};

export default LookBookTrait;
