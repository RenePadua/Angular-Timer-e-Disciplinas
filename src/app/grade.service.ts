import { Injectable } from '@angular/core';

interface Grade {
  name: string;
}

@Injectable()
export class GradeService {
  list: Array<Grade> = [];
  constructor() {
    this.adicionarDisciplina('Desenvolvimento para Dispositivos Móveis I');
    this.adicionarDisciplina('Inglês V');
    this.adicionarDisciplina('Negócios e Marketing Eletrônicos');
    this.adicionarDisciplina('Desenvolvimento para Servidores II');
    this.adicionarDisciplina('Tópicos Especiais em Sistemas para Internet II');
    this.adicionarDisciplina(
      'Projeto de Graduação em Sistemas para Internet I'
    );
    this.adicionarDisciplina('Desenvolvimento para Dispositivos Móveis II');
  }

  getDisciplinas() {
    return this.list;
  }

  adicionarDisciplina(name: string) {
    if (name != '') {
      this.list.push({ name });
    }
  }

  removerDisciplina(index: number) {
    this.list.splice(index, 1);
  }
}
