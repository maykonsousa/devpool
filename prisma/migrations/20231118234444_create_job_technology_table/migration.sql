-- CreateTable
CREATE TABLE "JobTechnology" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "technologyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobTechnology_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JobTechnology" ADD CONSTRAINT "JobTechnology_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobTechnology" ADD CONSTRAINT "JobTechnology_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;
