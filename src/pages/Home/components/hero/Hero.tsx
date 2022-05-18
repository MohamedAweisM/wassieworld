import styles from "./hero.module.scss";
import wassieGif from '../../../../assets/wassie.gif';
import MintButton from "./MintButton";
import MintCount from "./MintCount";
import { CandyMachineAccount } from "../../../../utils/models";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRecoilValue } from "recoil";
import { userStore } from "../../../../utils/store";
import MintMessage from "./MintMessage";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <h2> Phase 2 minting now open!</h2>
        </div>

        <div className={styles.hero}>
          <img className={styles.wassieGif} src={wassieGif} alt={'Wassie gif'}/>

          <div className={styles.heroRight}>

            <h3> {`Mint your Wassie for just ${finalPrice} SOL`} </h3>
            <MintButton
              candyMachine={candyMachine}
              updateCandyMachine={updateCandyMachine}
              connection={connection}
              setMintError={setMintError}/>
            <MintCount redeemed={redeemed} total={total}/>
            <MintMessage url={user?.solanaExplorerLink} isError={mintError}/>

            <div className={styles.maintenance}>
              <div className={styles.description}>
                <p> This site is currently undergoing maintenance </p>
                <p> We are working to improve our website in the next few weeks. </p>
              </div>

              <div className={styles.links}>
                <p> In the meantime... </p>
                <a
                  href="https://discord.gg/VWKcFRKdjK"
                  target="_blank"
                  rel="noreferrer">
                  Click here to join our Discord
                </a>
                <a
                  href="https://wassieworld.xyz/#/lookbook"
                  target="_blank"
                  rel="noreferrer">
                  Click here to see trait Lookbook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
