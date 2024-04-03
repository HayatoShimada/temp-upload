-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "temp1" DOUBLE PRECISION,
    "temp2" DOUBLE PRECISION,
    "temp3" DOUBLE PRECISION,
    "temp4" DOUBLE PRECISION,
    "temp5" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
