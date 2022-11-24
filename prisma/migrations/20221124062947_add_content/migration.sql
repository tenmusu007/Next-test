/*
  Warnings:

  - Added the required column `post_content` to the `likes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "likes" ADD COLUMN     "post_content" TEXT NOT NULL;
