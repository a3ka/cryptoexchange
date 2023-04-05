/*
  Warnings:

  - A unique constraint covering the columns `[accountId,network]` on the table `Ledger` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ledger_accountId_network_key" ON "Ledger"("accountId", "network");
