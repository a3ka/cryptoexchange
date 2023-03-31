/**
 * @typedef {import('../../infra/types').Infra} Infra
 */
import { ServiceError } from '../error.js';

import { getAllUsers } from './hello.repository.js';

const allUsers = {
  output: {},
  /**
   * @param {Infra} infra
   * @param {*} data
   */
  handler: async (infra, { data, meta }) => {
    return getAllUsers(infra, data).catch((err) => {
      infra.logger.error(err);
      throw new ServiceError(err);
    });
  },
};

const test = {
  output: {
    type: 'boolean',
  },
  /**
   * @param {Infra} infra
   * @param {*} data
   */
  handler: async (infra, { data, meta }) => {
    return true;
  },
};

export const commands = {
  allUsers,
  test,
};
