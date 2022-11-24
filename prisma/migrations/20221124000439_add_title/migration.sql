/*
  Warnings:

  - You are about to drop the column `post` on the `likes` table. All the data in the column will be lost.
  - Added the required column `post_id` to the `likes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_title` to the `likes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "likes" DROP COLUMN "post",
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD COLUMN     "post_title" TEXT NOT NULL;
