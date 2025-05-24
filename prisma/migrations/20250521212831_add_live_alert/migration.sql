-- CreateTable
CREATE TABLE "LiveAlert" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LiveAlert_pkey" PRIMARY KEY ("id")
);
