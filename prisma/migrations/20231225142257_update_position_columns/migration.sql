-- AlterTable
ALTER TABLE "Position" ADD COLUMN     "email" TEXT,
ADD COLUMN     "url" TEXT,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "language" DROP NOT NULL,
ALTER COLUMN "language_level" DROP NOT NULL;
