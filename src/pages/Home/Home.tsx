import { Hero, About, Roadmap, Utility, Team } from "./components";
import styles from "./home.module.scss";
import { useEffect, useState } from "react";
import { useSolana } from "../../hooks/useSolana";
import { useEnv } from "../../hooks/useEnv";
import { useInitializeStore } from "../../utils/store";
import { CandyMachineAccount } from "../../utils/models";
import { Connection } from "@solana/web3.js";
import { Header } from "../components";

const App = () => {
  const { envError } = useEnv();
  const { solana, solanaFail } = useSolana();
  const { initializeStore } = useInitializeStore();

  const [siteLoading, setSiteLoading] = useState<boolean>(true);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount | undefined>(undefined);
  const [connection, setConnection] = useState<Connection | undefined>(undefined);

  const updateCandyMachine = (newCandyMachine: CandyMachineAccount) => {
    setCandyMachine(newCandyMachine);
  };

  useEffect(() => {
    if (siteLoading) {
      if (envError) {
        setSiteLoading(false);
        return;
      }

      if (solana || solanaFail) {
        (async () => {
          const { candyMachine, connection } = await initializeStore(solana);
          setConnection(connection);
          setCandyMachine(candyMachine);
        })();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solana, solanaFail, initializeStore]);

  useEffect(() => {
    if (connection && candyMachine) {
      setSiteLoading(false);
    }
  }, [connection, candyMachine]);

  if (siteLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading} />
      </div>
    );
  }

  if (!siteLoading && envError) {
    return (
      <div className={styles.container}>
        <div style={{ margin: 'auto' }}>
          An error occurred. Please check if your environment variables have
          been populated correctly and redeploy the applcation.
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
        {/* candyMachine={candyMachine as CandyMachineAccount}
        connection={connection as Connection}/> */}
      <main>
        {/* <Hero
          candyMachine={candyMachine as CandyMachineAccount}
          updateCandyMachine={updateCandyMachine}
          connection={connection as Connection}/> */}
        <About />
        <Roadmap />
        <Utility />
        <Team />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
