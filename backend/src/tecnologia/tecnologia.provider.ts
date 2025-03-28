import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { Tecnologia } from '@core';

@Injectable()
export class TecnologiaProvider {
  constructor(private readonly prisma: PrismaService) {}

  async obterTodas(): Promise<Tecnologia[]> {
    const tecnologias: Tecnologia[] = await this.prisma.tecnologia.findMany();

    return tecnologias;
  }

  async obterDestaques(): Promise<Tecnologia[]> {
    const tecnologias_destaques = await this.prisma.tecnologia.findMany({
      where: {
        destaque: true,
      },
    });
    return tecnologias_destaques;
  }
}
