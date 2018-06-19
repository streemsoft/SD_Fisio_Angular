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
            this.fire.buscaSessoesGeral(item.key).then(y=> {
              var json2 = JSON.stringify(y);
              var obj2 = JSON.parse(json2);
          
              var temp:Sessao = new Sessao();
              temp.key = obj2.key;
              temp.dt_cad = this.sdformat.convertMiliDate(obj2.dt_cad);
              temp.key_cliente = obj2.key_cliente;
              temp.key_pront = obj2.key_pront;
              temp.nome = obj2.nome;
              temp.num = obj2.num;
              temp.status = obj2.status;
              this.recibos.push(temp);
              if(this.recibos.length > 0){
                this.recibos.reverse();
                this.controle = true;
              }else{            
                this.controle = false;
              }       
                
                
            });
          }
           
      });
  }

}
