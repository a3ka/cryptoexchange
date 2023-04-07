/** @typedef {import('../types').HTTPRoute} HttpRoute */

/** @type HttpRoute */
export const transfer = {
  method: 'POST',
  url: '/transfer',
  inputSource: 'body',
  command: { service: 'account', method: 'transfer' },
};

/** @type HttpRoute */
export const addEthAddressBalanceListener = {
  method: 'POST',
  url: '/eth-address-balance-listener',
  inputSource: 'body',
  command: { service: 'account', method: 'addEthAddressBalanceListener' },
};
