/** @typedef {import('../types').HTTPRoute} HttpRoute */

/** @type HttpRoute */
export const allUsers = {
  method: 'GET',
  url: '/all-users',
  inputSource: 'query',
  command: { service: 'hello', method: 'allUsers' },
};

/** @type HttpRoute */
export const test = {
  method: 'GET',
  url: '/test',
  inputSource: 'query',
  command: { service: 'hello', method: 'test' },
};
