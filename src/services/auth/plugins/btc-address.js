import bitcoin from 'bitcoinjs-lib';
import { BIP32Factory } from 'bip32';
import * as ecc from 'tiny-secp256k1';
import bip39 from 'bip39';

const bip32 = BIP32Factory(ecc);

function getAddress(node, network) {
  return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address;
}

export async function addBtcAddressToUser(userIndex = 0, network) {
  const MNEMONIC =
    // env('MNEMONIC_BTC') ||
    'furnace fringe bring wine explain kangaroo pool ugly ecology when steak ' +
    'meadow letter author book window surround hope lunar lumber eight final ' +
    'surface report';
  // Create an HD wallet from the mnemonic
  const seed = bip39.mnemonicToSeedSync(MNEMONIC);
  const hdnode = bip32.fromSeed(seed, network);

  // Derive the first account from the HD wallet
  let path;
  if (network === bitcoin.networks.bitcoin) path = `m/49'/0'/0'/0/${userIndex}`;
  if (network === bitcoin.networks.testnet) path = `m/49'/1'/0'/0/${userIndex}`;

  const keypair = hdnode.derivePath(path);

  // Return the account's address and private key
  // return {
  //   address: keypair.getAddress(),
  //   privateKey: keypair.toWIF(),
  // };

  return getAddress(keypair);
}
