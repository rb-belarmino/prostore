/*
  Warnings:

  - You are about to drop the column `badge` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "badge",
ADD COLUMN     "banner" TEXT;
