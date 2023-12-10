/*
  Warnings:

  - You are about to drop the column `level` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `languageId` on the `UserLanguage` table. All the data in the column will be lost.
  - Added the required column `level` to the `UserLanguage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `UserLanguage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserLanguage" DROP CONSTRAINT "UserLanguage_languageId_fkey";

-- AlterTable
ALTER TABLE "Language" DROP COLUMN "level";

-- AlterTable
ALTER TABLE "UserLanguage" DROP COLUMN "languageId",
ADD COLUMN     "level" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
