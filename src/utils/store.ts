import { Provider, web3 } from '@project-serum/anchor';
import { Connection } from '@solana/web3.js';
import { atom, useSetRecoilState } from 'recoil';
import { useEnv } from '../hooks/useEnv';
import type { CandyMachineAccount, UserState } from "./models";
import {
  checkWalletConnected,
  existsOwnerSPLToken,
  getCandyMachineState,
  getUserBalance,
} from './state-helpers';

export const userStore = atom<UserState>({
  key: 'user',
  default: {
    walletPublicKey: '',
    userBalance: 0,
    isWhiteListed: false,
    solanaExplorerLink: '',
  },
});

const getUserInfo = async ({
  solana, connection, candyMachine
}: {
  solana: any,
  connection: Connection,
  candyMachine: CandyMachineAccount | undefined,
}) => {
  const defaultUser = {
    walletPublicKey: '',
    userBalance: 0,
    isWhiteListed: false,
    solanaExplorerLink: '',
  };

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
  return { ...defaultUser, ...newUser };
};

export const useInitializeStore = () => {
  const { rpcUrl, candyMachineId } = useEnv();

  const setUser = useSetRecoilState(userStore);

  const initializeStore = async (solana: any) => {
    const opts = { preflightCommitment: "processed" };
    const connection = new Connection(rpcUrl as string);
    const candyMachinePublicKey = new web3.PublicKey(candyMachineId as string);
    const provider = new Provider(connection, solana, opts.preflightCommitment as web3.ConfirmOptions);
      
    const candyMachine = await getCandyMachineState(candyMachinePublicKey, provider);
    const user = await getUserInfo({ solana, connection, candyMachine });

    setUser(user);
    return {
      connection,
      candyMachine,
    };
  };

  return { initializeStore };
};