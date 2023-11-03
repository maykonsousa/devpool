/*
  Warnings:

  - You are about to drop the column `cel_phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `github_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `instagram_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `personal_website` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "cel_phone",
DROP COLUMN "github_url",
DROP COLUMN "instagram_url",
DROP COLUMN "linkedin_url",
DROP COLUMN "personal_website";

-- CreateTable
CREATE TABLE "Social" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "linkedin_url" TEXT NOT NULL,
    "instagram_url" TEXT NOT NULL,
    "github_url" TEXT NOT NULL,
    "personal_website" TEXT NOT NULL,
    "cell_phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Social" ADD CONSTRAINT "Social_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
