/*
  Warnings:

  - Added the required column `faculty` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student` ADD COLUMN `faculty` VARCHAR(191) NOT NULL;
