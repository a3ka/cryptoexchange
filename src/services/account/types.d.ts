import type { Command } from '../types';
import type { FromSchema } from 'json-schema-to-ts';
import type { Prisma, PrismaClient, Account as AccountModel } from '@prisma/client';
import {
  depositInput,
  withdrawInput,
  transferInput,
  getBalanceInput,
  getBalanceOutput,
  getTransactionsInput,
  getTransactionsOutput,
  addEthAddressBalanceListenerInput,
  addEthAddressBalanceListenerOutput,
} from './schema.js';

interface AccountCommands {
  deposit: Command<{
    Data: FromSchema<typeof depositInput>;
    Returns: void;
  }>;
  withdraw: Command<{
    Data: FromSchema<typeof withdrawInput>;
    Returns: void;
  }>;
  transfer: Command<{
    Data: FromSchema<typeof transferInput>;
    Returns: void;
  }>;
  getBalance: Command<{
    Data: FromSchema<typeof getBalanceInput>;
    Returns: FromSchema<typeof getBalanceOutput>;
  }>;
  getTransactions: Command<{
    Data: FromSchema<typeof getTransactionsInput>;
    Returns: FromSchema<typeof getTransactionsOutput>;
  }>;
  // addEthAddressBalanceListener: Command<{
  //   Data: FromSchema<typeof addEthAddressBalanceListenerInput>;
  //   Returns: FromSchema<typeof addEthAddressBalanceListenerOutput>;
  // }>;
}

export function getAccountBalance(
  db: Prisma.TransactionClient | PrismaClient,
  accountId: AccountModel['id'],
): Promise<number>;
