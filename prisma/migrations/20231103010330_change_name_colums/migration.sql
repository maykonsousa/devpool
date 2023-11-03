/*
  Warnings:

  - You are about to drop the column `count_indications` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `github_username` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `bio` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(4000)`.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_github_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "count_indications",
DROP COLUMN "github_username",
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'developer',
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "bio" SET DATA TYPE VARCHAR(4000);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
