/** @typedef {import('./types').EthWalletPlugin} Plugin */
// import fastifyPlugin from 'fastify-plugin';
import { ethers } from 'ethers';

// const provider = new ethers.providers.JsonRpcProvider(env(RPC_URL));

// /** @type Plugin */
export async function addEthAddressToUser(userNumber) {
  const MNEMONIC =
    // env('MNEMONIC') ||
    'vessel uphold shrimp sell account region use label affair mansion marine matter';
  const hdnode = ethers.utils.HDNode.fromMnemonic(MNEMONIC);
  // if (!userNumber) userNumber = '1';
  const basepathstr = `m/44'/60'/0'/0/${userNumber.toString()}`;
  // const basepathstr = `m/44'/60'/0'/0/6`;

  const acc = hdnode.derivePath(basepathstr).address;
  return acc;
}
