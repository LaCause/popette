-- CreateTable
CREATE TABLE "LiveAlertSettings" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "pollingActive" BOOLEAN NOT NULL DEFAULT true,
    "intervalMs" INTEGER NOT NULL DEFAULT 60000,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LiveAlertSettings_pkey" PRIMARY KEY ("id")
);
