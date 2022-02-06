const MintMessage = ({
  url,
  isError,
}: {
  url: string,
  isError: boolean,
}) => {
  if (!url && !isError) {
    return null;
  }

  const errorMesage = 'Something went wrong! Please try again.';
  const successMesage = 'Mint successful! Click here to view your Wassie.';

  const handleClick = () => {
    if (!isError) {
      window.open(url, "_blank");
    }
  }

  return (
    <span style={styles.link(isError)} onClick={handleClick}>
      {isError ? errorMesage : successMesage}
    </span>
  );
};

export default MintMessage;

const styles = {
  link: (isError: boolean) => ({
    margin: '16px 0',
    color: isError ? '#d63310': '#4bb543',
    textDecoration: 'none',
    ...(!isError && {
      fontWeight: 600,
      cursor: 'pointer',
    }),
  }),
};