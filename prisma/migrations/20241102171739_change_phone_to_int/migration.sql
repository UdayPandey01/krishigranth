/*
  Warnings:

  - You are about to drop the column `clerkId` on the `Farmer` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Farmer` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Farmer` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Farmer_clerkId_key";

-- AlterTable
ALTER TABLE "Farmer" DROP COLUMN "clerkId",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
