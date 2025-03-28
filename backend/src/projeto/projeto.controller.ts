import { Controller, Get, Param } from '@nestjs/common';
import { ProjetoProvider } from './projeto.provider';
import { Projeto } from '@core';

@Controller('projetos')
export class ProjetoController {
  constructor(private readonly repo: ProjetoProvider) {}

  @Get('')
  async obterTodos(): Promise<Projeto[]> {
    const projetos = await this.repo.obterTodos();
    return projetos;
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string): Promise<Projeto | null> {
    const projeto = await this.repo.obterPorId(id);
    return projeto;
  }
}
