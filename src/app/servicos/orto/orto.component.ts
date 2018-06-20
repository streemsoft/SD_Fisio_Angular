import { ServicoFireService } from './../servico-fire.service';
import { Sessao } from './../sessoes/sessoes.model';
import { PacModel } from './../pac/pac.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orto',
  templateUrl: './orto.component.html',
  styleUrls: ['./orto.component.css']
})
export class OrtoComponent implements OnInit {

  ficha:PacModel;
  sessoes:Sessao[] = [];
  proced:string = 'Tratamento Ortopedia';

  constructor(private fire: ServicoFireService) {
    this.inicialiaTela();

   }
   
   inicialiaTela(){
    this.ficha = this.fire.buscaFicha();
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
    this.fire.salvarFichaPAC(this.ficha, this.sessoes,'Tratamento Ortopedia', '4');
  }

 
}
