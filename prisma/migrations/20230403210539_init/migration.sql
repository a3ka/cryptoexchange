/*
  Warnings:

  - You are about to drop the column `name` on the `Ledger` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Ledger` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountId]` on the table `Ledger` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountId` to the `Ledger` table without a default value. This is not possible if the table is not empty.
  - Added the required column `network` to the `Ledger` table without a default value. This is not possible if the table is not empty.
  - Added the required column `walletNumber` to the `Ledger` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "NetworkType" AS ENUM ('btc', 'btcTestNetwork', 'eth', 'guorli');

-- DropIndex
DROP INDEX "Ledger_name_key";

-- AlterTable
ALTER TABLE "Ledger" DROP COLUMN "name",
DROP COLUMN "type",
ADD COLUMN     "accountId" TEXT NOT NULL,
ADD COLUMN     "network" "NetworkType" NOT NULL,
ADD COLUMN     "walletNumber" TEXT NOT NULL;

-- DropEnum
DROP TYPE "LedgerType";

-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_key" ON "Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Ledger_accountId_key" ON "Ledger"("accountId");

-- AddForeignKey
ALTER TABLE "Ledger" ADD CONSTRAINT "Ledger_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
