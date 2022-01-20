import { useEffect, useState } from 'react';
import { Connection } from '@solana/web3.js';
import { Provider, web3 } from '@project-serum/anchor';
import { useRecoilState } from 'recoil';

import wassieLogo from '../../assets/texts/wassieworld.png';
import twitterLogo from '../../assets/icons/twitterlogoblack.png';
import discordLogo from '../../assets/icons/discordlogoblack.png';
import solanaLogo from '../../assets/icons/solanalogoblack.png';
import wassieGif from '../../assets/example.gif';

import { userStore } from './lib/store';
import {
  getCandyMachineState,
  checkWalletConnected,
  getUserBalance,
  existsOwnerSPLToken,
} from './lib/state-helpers';

import Button from './Button';
import CardHeader from './CardHeader';
import './index.css';
import { CandyMachineAccount } from './models';

/***********************************/
// Customise the app by changing the following variables.
// const TITLE = "Wassie World";
const DESCRTIPTION = "3,333 Randomly Generated 3D Wassies! Wassie World is a project focused on providing real life utility for all its holders!";
const HEADER_TITLE = "wassieworld.xyz";
const HEADER_LINK = "https://wassieworld.xyz";
// Your image or GIF needs to be in the /public folder for this to work
// const IMAGE_LINK = "../../assets/example.gif";
/***********************************/

const MintingPage = () => {
  const rpcUrl = process.env.REACT_APP_SOLANA_RPC_HOST?.toString();
  const cluster = process.env.REACT_APP_SOLANA_NETWORK?.toString();
  const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID?.toString();
  const opts = { preflightCommitment: "processed" };
  
  const [user, setUser] = useRecoilState(userStore);

  const [siteLoading, setSiteLoading] = useState<boolean>(true);
  const [envError, setEnvError] = useState<boolean>(false);
  const [connection, setConnection] = useState<Connection | undefined>(undefined);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount | undefined>(undefined);

  const itemsRedeemed = candyMachine?.state?.itemsRedeemed;
  const itemsAvailable = candyMachine?.state?.itemsAvailable;

  const checkEnvError = () => {
    // Check if populated
    if (!rpcUrl || !candyMachineId || !cluster) {
      if (!rpcUrl) {
        console.error("RPC URL not populated");
      }
      if (!candyMachineId) {
        console.error("Candy Machine ID not populated");
      }
      if (!cluster) {
        console.error("Environment not populated");
      }
      return true;
    }
    if (candyMachineId.length < 32 || candyMachineId.length > 44) {
      console.error(
        "Candy Machine Public Key is invalid. Enter a length in-between 32 and 44 characters"
      );
      return true;
    }
    return false;
  }

  const getUserInfo = async ({
    solana, connection, candyMachine
  }: {
    solana: any,
    connection: Connection,
    candyMachine: CandyMachineAccount | undefined,
  }) => {
    const walletPublicKey = await checkWalletConnected(solana);
    const userBalance = walletPublicKey ? await getUserBalance(walletPublicKey, connection) : undefined;
    const isWhiteListed = walletPublicKey
    ? await existsOwnerSPLToken(
      walletPublicKey,
      connection,
      candyMachine?.state.whitelistMintSettings?.mint,
    ) : undefined;
    const newUser = {
      walletPublicKey,
      ...(userBalance && { userBalance }),
      ...(isWhiteListed && { isWhiteListed }),
    };
    setUser({ ...user, ...newUser });
  };

  useEffect(() => {
    const isEnvError = checkEnvError();
    if (isEnvError) {
      setEnvError(true);
      setSiteLoading(false);
      return;
    }

    const { solana } = window as any;
    const connection = new Connection(rpcUrl as string);
    const candyMachinePublicKey = new web3.PublicKey(candyMachineId as string);
    const provider = new Provider(connection, solana, opts.preflightCommitment as web3.ConfirmOptions);

    (async () => {
      const candyMachine = await getCandyMachineState(candyMachinePublicKey, provider);
      await getUserInfo({ solana, connection, candyMachine });
      setCandyMachine(candyMachine);
    })();

    setConnection(connection);
    setSiteLoading(false);
  }, []);

  const updateCandyMachine = (newCandyMachine: CandyMachineAccount) => {
    setCandyMachine(newCandyMachine);
  };

  return (
    <div className="page-container h-full bg-blue-100">
      {/* <!-- Error section --> */}
      {!siteLoading && envError && (
        <div className="h-full flex">
          <div className="m-auto">
            An error occurred. Please check if your environment variables have been
            populated correctly and redeploy the applcation.
          </div>
        </div>
      )}
      {/* <!-- Loading Section --> */}
      {siteLoading && (
        <div className=" h-full flex">
          <div className="lds-hourglass m-auto" />
        </div>
      )}
      {!envError && !siteLoading && HEADER_TITLE && (
        // <!-- Menu Bar -->
        <div className="max-w-screen-lg flex mx-auto justify-around mt-4">
          <a
            href={HEADER_LINK}
            className="">
            <img src={wassieLogo} alt="logo" className="w-24"/>
          </a>
          <div className="max-w-md inline-flex float-right">
            <a
              href="https://discord.gg/VWKcFRKdjK"
              target="_blank"
              rel="noreferrer"
              className="w-16">
              <img src={discordLogo} alt="discord logo" className="  "/>
            </a>
            <a href="#" className="w-16">
              <img src={solanaLogo} alt="solana logo" className=""/>
            </a>
            <a
              href="https://twitter.com/Wassieworld"
              target="_blank"
              rel="noreferrer"
              className="w-16 float-right">
                <img src={twitterLogo} alt="twitter logo" className=" "/>
            </a>
          </div>
        </div>
      )}
      {!envError && !siteLoading && (
        // <!-- Card -->
        <div className=" fade-in max-w-lg mx-auto bg-blue-200 rounded-lg my-12   shadow-2xl">
          {/* <!-- Top Bar --> */}
          <CardHeader />
          <hr />
          <br />
          {/* <!-- Main Body --> */}
          <div className="p-6">
            <img src={wassieGif} alt="wassie gif" className=" rounded-lg w-1/2 mx-auto m-5" />
            <div className=" text-center text-lg sm:text-2xl font-mono font-bold py-5 tracking-wider ">
              <img src={wassieLogo} alt="logo" className="m-auto w-24"/>
            </div>
            <div className="text-sm sm:text-md font-semibold pb-5 text-gray-600 ">
              {DESCRTIPTION}
            </div>
            <Button
              cluster={cluster}
              connection={connection}
              candyMachine={candyMachine}
              updateCandyMachine={updateCandyMachine}/>

            <div className=" tracking-widest font-bold text-sm pt-3 text-gray-400">
              {itemsRedeemed}/{itemsAvailable} claimed
            </div>
            <div className="flex flex-col pt-3">
              {user.solanaExplorerLink && (
                <a
                  href={user.solanaExplorerLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-700 font-semibold  p-1">
                    View on Solana Explorer
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MintingPage;