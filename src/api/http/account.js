/** @typedef {import('../types').HTTPRoute} HttpRoute */

/** @type HttpRoute */
export const transfer = {
  method: 'POST',
  url: '/transfer',
  inputSource: 'body',
  command: { service: 'account', method: 'transfer' },
};

/** @type HttpRoute */
export const deposit = {
  method: 'POST',
  url: '/deposit',
  inputSource: 'body',
  command: { service: 'account', method: 'deposit' },
};
