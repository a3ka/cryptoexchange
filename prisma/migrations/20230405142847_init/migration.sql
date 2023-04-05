/*
  Warnings:

  - The values [guorli] on the enum `NetworkType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `userNumber` on the `User` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "NetworkType_new" AS ENUM ('btc', 'btcTestNetwork', 'eth', 'goerli');
ALTER TABLE "Ledger" ALTER COLUMN "network" TYPE "NetworkType_new" USING ("network"::text::"NetworkType_new");
ALTER TYPE "NetworkType" RENAME TO "NetworkType_old";
ALTER TYPE "NetworkType_new" RENAME TO "NetworkType";
DROP TYPE "NetworkType_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userNumber",
ADD COLUMN     "userIndex" SERIAL NOT NULL;
