import { SdformatService } from './../../sdformat.service';
import { Recibo } from './recibo.model';
import { AtendimentoFireService } from './../atendimento-fire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrls: ['./recibos.component.css']
})
export class RecibosComponent implements OnInit {

  recibos:Recibo[] = [];
  select:Recibo;
  controle:boolean = false;

  constructor(private fire : AtendimentoFireService, private sdformat: SdformatService) { }

  ngOnInit() {
    this.buscarRecibos();
  }

  buscarRecibos(){
          this.fire.buscaRecibos().then(x=> {
          var json = JSON.stringify(x);
          var obj = JSON.parse(json);

          for(let i in obj){
            var item = obj[i];
            var temp:Recibo = new Recibo();
            temp.key = item.key;
            temp.dt_cad = this.sdformat.convertMiliDate(item.dt_cad);
            temp.fpag = item.fpag;
            temp.key_fatura = item.key_fatura;
            temp.vl_pago = item.vl_pago;
            this.recibos.push(temp);
          }       
          if(this.recibos.length > 0){
            this.recibos.reverse();
            this.controle = true;
          }else{            
            this.controle = false;
          }  
      });
  }

}
