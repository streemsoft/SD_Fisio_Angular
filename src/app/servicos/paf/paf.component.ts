import { ServicoFireService } from './../servico-fire.service';
import { Sessao } from './../sessoes/sessoes.model';
import { PacModel } from './../pac/pac.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paf',
  templateUrl: './paf.component.html',
  styleUrls: ['./paf.component.css']
})
export class PafComponent implements OnInit {

  ficha:PacModel;
  proced:string = 'Tratamento Facial';
  sessoes:Sessao[] = [];

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
    this.fire.salvarFichaPAC(this.ficha, this.sessoes,'Tratamento Facial', '5');
  }
}
