import type { Command } from '../types';
import type { FromSchema } from 'json-schema-to-ts';
import type {
  Prisma,
  PrismaClient,
  Account as AccountModel,
  Ledger,
  LedgerStatement,
} from '@prisma/client';
import {
  depositInput,
  withdrawInput,
  transferInput,
  getBalanceInput,
  getBalanceOutput,
  getTransactionsInput,
  getTransactionsOutput,
  getLedgerBalanceInput,
  getLedgerBalanceOutput,
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
  getLedgerBalance: Command<{
    Data: FromSchema<typeof getLedgerBalanceInput>;
    Returns: FromSchema<typeof getLedgerBalanceOutput>;
  }>;
}

export function getAccountBalance(
  db: Prisma.TransactionClient | PrismaClient,
  accountId: AccountModel['id'],
): Promise<number>;

export function addLatestLedgerStatement(
  db: Prisma.TransactionClient | PrismaClient,
  ledgerId: Ledger['id'],
  amountAddOrSubtract: LedgerStatement['balance'] | undefined,
): Promise<LedgerStatement>;
