import { ethers } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';

// const provider = new ethers.providers.InfuraProvider('mainnet', 'YOUR_INFURA_API_KEY');
// const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const provider = new JsonRpcProvider('http://localhost:7545');

export const ethAddressBalanceListener = async (ethAddress) => {
  const initialBalance = await provider.getBalance(ethAddress);

  return new Promise((resolve, reject) => {
    let balanceIncreased = false;

    const filter = {
      address: ethAddress,
      fromBlock: 'latest',
      toBlock: 'latest',
    };
    const callback = async (txHash) => {
      // const callback = async () => {
      try {
        const tx = await provider.getTransaction(txHash);

        const newBalance = await provider.getBalance(ethAddress);

        if (newBalance.gt(initialBalance) && !balanceIncreased) {
          balanceIncreased = true;
          const increaseAmount = newBalance.sub(initialBalance);
          resolve({
            balanceIncreased: true,
            // increaseAmount: increaseAmount.toString(),
            increaseAmount,
            senderAddress: tx.from,
          });
        }
      } catch (err) {
        reject(err);
      }
    };
    provider.on(filter, callback);

    setTimeout(() => {
      provider.removeListener(filter, callback);
      resolve(false);
    }, 300000);
  });
};
