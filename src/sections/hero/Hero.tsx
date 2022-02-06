import styles from "./hero.module.scss";
import wassieGif from '../../assets/wassie.gif';
import MintButton from "./MintButton";
import MintCount from "./MintCount";
import { CandyMachineAccount } from "../../utils/models";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRecoilValue } from "recoil";
import { userStore } from "../../utils/store";
import MintMessage from "./MintMessage";
import { useState } from "react";

const Hero = ({
  candyMachine,
  updateCandyMachine,
  connection
}: {
  candyMachine: CandyMachineAccount,
  updateCandyMachine: (candyMachine: CandyMachineAccount) => void,
  connection: Connection,
}) => {
  const [mintError, setMintError] = useState<boolean>(false);
  const user = useRecoilValue(userStore);
  const redeemed = candyMachine?.state?.itemsRedeemed;
  const total = candyMachine?.state?.itemsAvailable;

  const price = candyMachine?.state?.price;
  const whitelistPrice = candyMachine?.state?.whitelistMintSettings?.discountPrice;
  const userWhitelisted = user?.isWhiteListed;

  const finalPrice = (userWhitelisted && whitelistPrice ? whitelistPrice : price) / LAMPORTS_PER_SOL;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headings}>
          <h2> Public minting now open!</h2>
          <h3> {`Mint your Wassie for just ${finalPrice} SOL`} </h3>
        </div>

        <div className={styles.hero}>
          <img className={styles.wassieGif} src={wassieGif} alt={'Wassie gif'}/>

          <div className={styles.heroRight}>
            <p className={styles.description}>
              3,333 Randomly Generated 3D Wassies! Wassie World is a 
              project focused on providing real life utility for all 
              its holders!
            </p>

            <MintButton
              candyMachine={candyMachine}
              updateCandyMachine={updateCandyMachine}
              connection={connection}
              setMintError={setMintError}/>
            <MintCount redeemed={redeemed} total={total}/>
            <MintMessage url={user?.solanaExplorerLink} isError={mintError}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
