import { Sessao } from './../../servicos/sessoes/sessoes.model';
import { SdformatService } from './../../sdformat.service';
import { AtendimentoFireService } from './../atendimento-fire.service';
import { SessaoCli } from './../../servicos/sessoes/sessao-cli.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessoes',
  templateUrl: './sessoes.component.html',
  styleUrls: ['./sessoes.component.css']
})
export class SessoesComponent implements OnInit {

  recibos:Sessao[] = [];
  controle:boolean = false;

  constructor(private fire : AtendimentoFireService, private sdformat: SdformatService) { }

  ngOnInit() {
    this.buscarRecibos();
  }

  buscarRecibos(){
          this.fire.buscaSessoes().then(x=> {
          var json = JSON.stringify(x);
          var obj = JSON.parse(json);

          for(let i in obj){
            var item = obj[i];
            
            var temp:Sessao = new Sessao();
            temp.key = item.key;
            temp.dt_cad = this.sdformat.convertMiliDate(item.dt_cad);
            temp.key_cliente = item.key_cliente;
            temp.key_pront = item.key_pront;
            temp.nome = item.nome;
            temp.num = item.num;
            temp.status = item.status;
            this.recibos.push(temp);
          }       
          if(this.recibos.length > 0){
            this.controle = true;
          }else{            
            this.controle = false;
          }  
      });
  }

}
