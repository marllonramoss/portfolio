import { Projeto } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ProjetoProvider {
  constructor(private readonly repo: PrismaService) {}

  async obterTodos(): Promise<Projeto[]> {
    const projetos = await this.repo.projeto.findMany();
    return projetos as any;
  }

  async obterPorId(id: string): Promise<Projeto | null> {
    const projeto = (await this.repo.projeto.findUnique({
      where: { id },
      include: { tecnologias: true },
    })) as any;

    return projeto;
  }
}
