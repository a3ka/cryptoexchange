/** @typedef {import('./types').EthWalletPlugin} Plugin */
// import fastifyPlugin from 'fastify-plugin';
import { ethers } from 'ethers';
import { HDNode } from '@ethersproject/hdnode';
import * as dotenv from 'dotenv';
dotenv.config();

// const provider = new ethers.providers.JsonRpcProvider(env(RPC_URL));

// export async function addEthAddressToUser(userIndex, network) {
//   const MNEMONIC =
//     // env('MNEMONIC_ETH') ||
//     'vessel uphold shrimp sell account region use label affair mansion marine matter';
//   const hdnode = ethers.utils.HDNode.fromMnemonic(MNEMONIC);
//   const basepathstr = `m/44'/60'/0'/0/${userIndex.toString()}`;
//
//   return hdnode.derivePath(basepathstr).address;
// }

export async function addEthAddressToUser(userIndex, network) {
  const MNEMONIC =
    // process.env.MNEMONIC_ETH ||
    'puppy grab copy again supreme carbon escape tonight broken tongue better viable';

  // Create an HD wallet from the mnemonic
  // const hdnode = ethers.utils.HDNode.fromMnemonic(MNEMONIC);
  const hdnode = HDNode.fromMnemonic(MNEMONIC);

  // Derive the first account from the HD wallet
  const path = `m/44'/60'/0'/0/${userIndex.toString()}`;
  const wallet = hdnode.derivePath(path);

  // const provider = new ethers.providers.InfuraProvider(network, process.env.RPC_URL_`${network}`);

  // Return the account's address and private key
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
    // provider,
  };

  // return wallet.address;
}
