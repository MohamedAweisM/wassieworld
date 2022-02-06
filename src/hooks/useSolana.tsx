import { useEffect, useState } from "react";

const MAX_ATTEMPTS = 10;

export const useSolana = () => {
  let checkForPhantom: any;
  const [phantom, setPhantom] = useState((window as any).solana);
  const [attempts, setAttempts] = useState(0);
  const [solanaFail, setSolanaFail] = useState(false);

  const getPhantom = () => {
    checkForPhantom = !checkForPhantom && setInterval(() => {
      const { solana } = window as any;
      if (solana && solana?.isPhantom) {
        setPhantom(solana);
      }

      setAttempts(prevAttempts => prevAttempts + 1);
    }, 50);

    if (phantom) {
      clearInterval(checkForPhantom);
      return;
    }

    if (attempts > MAX_ATTEMPTS) {
      setSolanaFail(true);
      clearInterval(checkForPhantom);
    }
  }
  
  useEffect(() => {
    getPhantom();
    return () => clearInterval(checkForPhantom);
  }, [phantom, attempts]);

  return {
    solana: phantom,
    solanaFail, 
  };
};