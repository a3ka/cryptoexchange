/*
  Warnings:

  - You are about to drop the column `walletNumber` on the `Ledger` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ledger" DROP COLUMN "walletNumber",
ADD COLUMN     "walletAddress" TEXT;
