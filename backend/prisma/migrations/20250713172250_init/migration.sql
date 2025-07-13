/*
  Warnings:

  - You are about to drop the `Board` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Board";

-- CreateTable
CREATE TABLE "SnowBoard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "size" INTEGER NOT NULL,
    "shape" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SnowBoard_pkey" PRIMARY KEY ("id")
);
