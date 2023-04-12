// @ts-nocheck
import { ethers } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
// import { hexZeroPad } from 'ethers/lib/utils';

// const provider = new ethers.providers.InfuraProvider('mainnet', 'YOUR_INFURA_API_KEY');
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

export async function ethAddressBalanceListener(ethAddress) {
  const initialBalance = await provider.getBalance(ethAddress);
  console.log('INITIAL BALANCE: ', initialBalance);
  console.log('GANACHE NODE : ', await provider.getNetwork());

  return new Promise((resolve, reject) => {
    let balanceIncreased = false;

    const filter = {
      // address: null, // listen for Transfer events from any contract
      address: ethAddress,
      topics: [
        ethers.utils.id('Transfer(address,address,uint256)'), // listen for Transfer events
        null, // listen for events where the sender address is any address
        ethers.utils.hexZeroPad(ethAddress, 32), // listen for events where the recipient address matches the specific address
      ],
    };

    console.log('ETH-ADDRESS: ', ethAddress);
    console.log('!!!!!!!!', ethers.utils.hexZeroPad(ethAddress, 32));

    const callback = async (txHash) => {
      // const callback = async () => {
      try {
        console.log('Callback function executed');
        const tx = await provider.getTransaction(txHash);
        console.log('TX: ', tx);

        const newBalance = await provider.getBalance(ethAddress);
        console.log('NEWBALANCE :', newBalance);

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
        console.log('Error in callback:', error);
        reject(err);
      }
    };

    console.log('FILTER: ', filter);
    provider.on(filter, callback);

    // provider.once('any', (event) => {
    //   console.log('Event:', event);
    // });

    // provider.on('block', (blockNumber) => {
    //   console.log(`New block: ${blockNumber}`);
    // });

    // setTimeout(() => {
    //   provider.removeListener(filter, callback);
    //   resolve(false);
    //   // }, 300000);
    // }, 60000);
  });
}
