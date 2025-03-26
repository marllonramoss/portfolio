import { Injectable } from '@nestjs/common';
import { x } from '@core';

@Injectable()
export class AppService {
  getHello(): string {
    return `Olá! Bem-vindo ao meu serviço NestJS! -- ${x}`;
  }
}
