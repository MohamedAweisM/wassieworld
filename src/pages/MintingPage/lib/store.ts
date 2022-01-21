import { atom } from 'recoil';
import type { CandyMachineAccount, UserState } from "../models";

export const candyMachineStore = atom<CandyMachineAccount | undefined>({
  key: 'candyMachine',
  default: undefined,
});

export const userStore = atom<UserState>({
  key: 'user',
  default: {
    walletPublicKey: '',
    userBalance: 0,
    isWhiteListed: false,
    solanaExplorerLink: '',
  },
});