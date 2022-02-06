import styles from './mintCount.module.scss';

const MintCount = ({
  redeemed, total,
}: {
  redeemed: number, total: number,
}) => {

  return (
    <p className={styles.mintCount}>
      {redeemed} / {total} claimed
    </p>
  );
};

export default MintCount;