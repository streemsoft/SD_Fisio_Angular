import { Sessao } from './../sessoes/sessoes.model';
import { PacModel } from './pac.model';
import { Component, OnInit } from '@angular/core';
import { ServicoFireService } from '../servico-fire.service';

@Component({
  selector: 'app-pac',
  templateUrl: './pac.component.html',
  styleUrls: ['./pac.component.css']
})
export class PacComponent implements OnInit {

  ficha:PacModel;
  sessoes:Sessao[] = [];
  proced:string = 'Acne e Seborreia';

  constructor(private fire: ServicoFireService) {
    this.ficha = new PacModel('');

   }

  ngOnInit() {
    this.incluirSessao();
  }

  incluirSessao(){
    var x:Sessao = new Sessao();

    x.key_cliente = this.fire.getClienteKey();
    x.nome = this.proced.toUpperCase();
    x.status = 'Pendente';
    x.num = String((this.sessoes.length + 1));
    this.sessoes.push(x);

  }

  salvarFicha(){
    this.fire.salvarFichaPAC(this.ficha, this.sessoes,'Acne e Seborreia', '1');
  }

}
