/*
  Warnings:

  - The primary key for the `LedgerStatement` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "LedgerStatement" DROP CONSTRAINT "LedgerStatement_pkey",
ALTER COLUMN "date" SET DATA TYPE TIMESTAMP(3),
ADD CONSTRAINT "LedgerStatement_pkey" PRIMARY KEY ("ledgerId", "date");
