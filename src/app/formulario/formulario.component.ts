import { Component } from '@angular/core';
import { Inscricao } from '../model/inscricao';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
	
	obterEstiloTitulo() {
    return {
      backgroundColor: 'lightsteelblue'
    }
  }

  obterEstiloBotao() {
    return {
      backgroundColor: 'lightsteelblue',
      padding: '70px',
      border: 'none',
      borderRadius: '15px',
	  width: '300px',
      display: 'inline'
    }
  }

  obterClassesCartao() {
    return ['cartao']
  }
  
  obterClassesRodape() {
    return ['rodape']
  }

  obterClassesNumInscricao() {
    return ['inscricao']
  }

  numInscricao: number;

  gerarNumInscricao(): void {
      this.numInscricao = Math.round(Math.random() * 100) + 1;
  }

  

  constructor() { }

  cursos = ['ADS', 'Gestão de RH', 'Eventos', 'Gestão Comercial'];

  inscricao: Inscricao = new Inscricao();

  salvar(inscricaoForm): void {
    this.inscricao.nome = inscricaoForm.value.nome;
    this.inscricao.idade = inscricaoForm.value.idade;
    this.inscricao.curso = inscricaoForm.value.curso;

    console.log(this.inscricao);
  }
}