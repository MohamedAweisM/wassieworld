import { useRecoilValue } from 'recoil';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import { userStore } from './lib/store';

import star from '../../assets/star.svg';

const CardHeader = () => {
  const user = useRecoilValue(userStore);

  return (
    <div className="justify-end flex p-3">
      {user.isWhiteListed && (
        <div className="flex mr-auto">
          <img src={star} alt="" className="w-5 mr-2" />
          <div className="my-auto text-gray-600 text-sm">Whitelist</div>
        </div>
      )}
      <div className="flex">
        {user.walletPublicKey
        ? (
          <div className=" flex flex-col">
            <div className="flex">
              <span className="my-auto mr-2 rounded-full h-2 w-2 bg-green-500" />
              <span className=" my-auto text-gray-600 text-sm">
                {user.walletPublicKey?.slice(0, 8)}
              </span>
            </div>
            <div className=" text-xs text-gray-600 text-right ">
              {(user.userBalance / LAMPORTS_PER_SOL).toFixed(2)} SOL
            </div>
          </div>
        ) : (
          <>
            <span className="my-auto mr-2 rounded-full h-2 w-2 bg-gray-500" />
            <span className=" my-auto text-gray-600 text-sm"> Not Connected </span>
          </>
        )}
      </div>
    </div>
  );
};

export default CardHeader;
