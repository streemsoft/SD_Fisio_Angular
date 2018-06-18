import { ServicoFireService } from './../servico-fire.service';
import { Sessao } from './../sessoes/sessoes.model';
import { PacModel } from './../pac/pac.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pe',
  templateUrl: './pe.component.html',
  styleUrls: ['./pe.component.css']
})
export class PeComponent implements OnInit {

  ficha:PacModel;
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
    x.nome = 'Tratamendo de Estrias';
    x.status = 'Pendente';
    x.num = String((this.sessoes.length + 1));
    this.sessoes.push(x);

  }

  salvarFicha(){
    this.fire.salvarFichaPAC(this.ficha, this.sessoes,'Tratamendo de Estrias', '2');
  }
}
