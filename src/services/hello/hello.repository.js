/**
 * @typedef {import('../../infra/types').Infra} Infra
 */

/**
 * @param {Infra} infra
 */
export const getAllUsers = async ({ db, logger }) => {
  const res = await db.$queryRaw`SELECT * FROM User`;
  logger.info(res);
  return res;
};
