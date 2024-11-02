/*
  Warnings:

  - Made the column `image` on table `Crop` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Crop" ALTER COLUMN "image" SET NOT NULL;
