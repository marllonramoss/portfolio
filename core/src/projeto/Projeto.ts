import { Tecnologia } from "../tecnologia";

export default interface Projeto {
  id: string;
  nome: string;
  descricao: string;
  imagens: string[];
  repositorio: string;
  destaque: string;
  tecnologias: Tecnologia[];
}
