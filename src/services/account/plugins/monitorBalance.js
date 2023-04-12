// @ts-nocheck
import { ethers } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';

// const provider = new ethers.providers.InfuraProvider('mainnet', 'YOUR_INFURA_API_KEY');
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

export async function monitorBalance(address) {
  const initialBalance = await provider.getBalance(address);

  console.log(`Initial balance of ${address}: ${ethers.utils.formatEther(initialBalance)} ETH`);

  let currentTime = new Date().getTime();
  const endTime = currentTime + 5 * 60 * 1000;
  let increaseAmount;
  let tx;

  while (currentTime < endTime) {
    const currentBalance = await provider.getBalance(address);

    if (currentBalance.gt(initialBalance)) {
      console.log(
        `Balance of ${address} increased from ${ethers.utils.formatEther(
          initialBalance,
        )} ETH to ${ethers.utils.formatEther(currentBalance)} ETH`,
      );
      // increaseAmount = currentBalance.sub(initialBalance);
      increaseAmount = (currentBalance - initialBalance) / 1000000000000000000;
      // const txList = await provider.getHistoryTransactions(address);
      // tx = await provider.getTransaction(txList[0].hash);
      break;
    }

    await new Promise((resolve) => setTimeout(resolve, 5000)); // wait for 5 seconds before checking again
    currentTime = new Date().getTime();
  }

  if (currentTime > endTime) {
    console.log('🚀 ~ file: monitorBalance.js:38 ~ monitorBalance ~ endTime:', endTime);
    console.log('🚀 ~ file: monitorBalance.js:38 ~ monitorBalance ~ currentTime:', currentTime);
    // throw new Error('Time out');
  }

  return { success: true, increaseAmount };
}
