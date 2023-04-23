/** @typedef {import('json-schema-to-ts')} jsonToTs */
import entities from '../../../prisma/json-schema.js';
import * as schema from '../../lib/schema.js';

const { account, accountTransaction, ledger, ledgerStatement } = entities;

export const depositInput = /** @type {const} */ ({
  ...schema.strictObjectProperties,
  required: ['accountId', 'network'],
  properties: {
    accountId: ledger.properties.accountId,
    network: ledger.properties.network,
  },
});

export const depositOutput = /** @type {const} */ ({
  items: {
    ...schema.strictObjectProperties,
    properties: { response: { type: 'string' } },
  },
});

export const withdrawInput = /** @type {const} */ ({
  ...schema.strictObjectProperties,
  required: ['accountId', 'amount'],
  properties: {
    accountId: account.properties.id,
    amount: accountTransaction.properties.amount,
  },
});

export const transferInput = /** @type {const} */ ({
  ...schema.strictObjectProperties,
  required: ['fromId', 'toId', 'amount'],
  properties: {
    fromId: account.properties.id,
    toId: account.properties.id,
    amount: accountTransaction.properties.amount,
  },
});

const accountIdInput = /** @type {const} */ ({
  ...schema.strictObjectProperties,
  required: ['accountId'],
  properties: { accountId: account.properties.id },
});

const ledgerIdInput = /** @type {const} */ ({
  ...schema.strictObjectProperties,
  required: ['ledgerId'],
  properties: { accountId: ledger.properties.id },
});

export const getBalanceInput = accountIdInput;
export const getBalanceOutput = /** @type {const} */ ({
  ...schema.strictObjectProperties,
  required: ['balance'],
  properties: { balance: { type: 'number' } },
});

export const getTransactionsInput = accountIdInput;
export const getTransactionsOutput = /** @type {const} */ ({
  type: 'array',
  items: {
    ...schema.strictObjectProperties,
    required: ['id', 'amount', 'date', 'type', 'accountId'],
    properties: {
      id: accountTransaction.properties.id,
      amount: accountTransaction.properties.amount,
      date: accountTransaction.properties.date,
      type: accountTransaction.properties.typeExternal,
      accountId: accountTransaction.properties.accountId,
    },
  },
});

export const getLedgerBalanceInput = ledgerIdInput;
export const getLedgerBalanceOutput = /** @type {const} */ ({
  ...schema.strictObjectProperties,
  required: ['balance'],
  properties: { balance: ledgerStatement.properties.balance },
});
