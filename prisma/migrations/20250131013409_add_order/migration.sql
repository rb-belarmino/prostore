/*
  Warnings:

  - The primary key for the `OrderItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orderID` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `productID` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `orderId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderID_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productID_fkey";

-- AlterTable
ALTER TABLE "OrderItem" DROP CONSTRAINT "orderitems_orderId_productId_pk",
DROP COLUMN "orderID",
DROP COLUMN "productID",
ADD COLUMN     "orderId" UUID NOT NULL,
ADD COLUMN     "productId" UUID NOT NULL,
ADD CONSTRAINT "orderitems_orderId_productId_pk" PRIMARY KEY ("orderId", "productId");

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
