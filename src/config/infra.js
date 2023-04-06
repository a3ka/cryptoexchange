/** @typedef {import('./types').Config['infra']} Infra */
import { nodeEnv } from './util.js';

/** @type Infra */
export default {
  logger: { env: nodeEnv },
  db: { errorFormat: 'minimal' },
  // db: {
  //   log: ['query', 'info', 'warn', 'error'],
  //   errorFormat: 'colorless',
  //   debug: true,
  // },
  redis: {},
  bus: { type: 'local' },
};
