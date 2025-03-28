/*
  Warnings:

  - The primary key for the `_ProjetoToTecnologia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `projetos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tecnologias` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_ProjetoToTecnologia" DROP CONSTRAINT "_ProjetoToTecnologia_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjetoToTecnologia" DROP CONSTRAINT "_ProjetoToTecnologia_B_fkey";

-- AlterTable
ALTER TABLE "_ProjetoToTecnologia" DROP CONSTRAINT "_ProjetoToTecnologia_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT,
ADD CONSTRAINT "_ProjetoToTecnologia_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "projetos" DROP CONSTRAINT "projetos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "projetos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "projetos_id_seq";

-- AlterTable
ALTER TABLE "tecnologias" DROP CONSTRAINT "tecnologias_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "tecnologias_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "tecnologias_id_seq";

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnologia" ADD CONSTRAINT "_ProjetoToTecnologia_A_fkey" FOREIGN KEY ("A") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnologia" ADD CONSTRAINT "_ProjetoToTecnologia_B_fkey" FOREIGN KEY ("B") REFERENCES "tecnologias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
