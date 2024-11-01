/*
  Warnings:

  - You are about to drop the column `phone` on the `Crop` table. All the data in the column will be lost.
  - You are about to drop the `Farmer` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Crop" DROP COLUMN "phone";

-- DropTable
DROP TABLE "Farmer";
