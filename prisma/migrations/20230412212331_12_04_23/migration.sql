/*
  Warnings:

  - A unique constraint covering the columns `[ledgerId,date]` on the table `LedgerStatement` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LedgerStatement_ledgerId_date_key" ON "LedgerStatement"("ledgerId", "date");
