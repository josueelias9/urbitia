/*
  Warnings:

  - You are about to drop the column `createdAt` on the `chat` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `chat` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `marketplace_user` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."chat" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "public"."marketplace_user" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "public"."property" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
