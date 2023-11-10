/*
  Warnings:

  - You are about to drop the column `role` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Project` table. All the data in the column will be lost.
  - Added the required column `deployed_url` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repo_url` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "role",
DROP COLUMN "title",
ADD COLUMN     "deployed_url" TEXT NOT NULL,
ADD COLUMN     "image_url" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "repo_url" TEXT NOT NULL;
