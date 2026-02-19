-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Tutor', 'Student');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Unbanned', 'Banned');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Student',
    "status" "Status" NOT NULL DEFAULT 'Unbanned',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TutorProfile" (
    "id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL,
    "isBooked" BOOLEAN NOT NULL,
    "userid" TEXT NOT NULL,

    CONSTRAINT "TutorProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_status_idx" ON "users"("status");

-- CreateIndex
CREATE UNIQUE INDEX "TutorProfile_userid_key" ON "TutorProfile"("userid");

-- AddForeignKey
ALTER TABLE "TutorProfile" ADD CONSTRAINT "TutorProfile_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
