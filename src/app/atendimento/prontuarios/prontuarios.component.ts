import { Prontuario } from './prontuario.model';
import { SdformatService } from './../../sdformat.service';
import { AtendimentoFireService } from './../atendimento-fire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prontuarios',
  templateUrl: './prontuarios.component.html',
  styleUrls: ['./prontuarios.component.css']
})
export class ProntuariosComponent implements OnInit {

  recibos:Prontuario[] = [];
  controle:boolean = false;

  constructor(private fire : AtendimentoFireService, private sdformat: SdformatService) { }

  ngOnInit() {
    this.buscarProntuarios();
  }

  buscarProntuarios(){
          this.fire.buscarProntuarios().then(x=> {
            var username = x.val();
          var json = JSON.stringify(username);
          var obj = JSON.parse(json);
          
          for(let i in obj){
            var item = obj[i];
            
            var temp:Prontuario = new Prontuario();
              temp.key = item.key;
              temp.dt_cad = this.sdformat.convertMiliDate(item.dt_cad);
              temp.key_cliente = item.key_cliente;
              temp.nome_ficha = item.nome_ficha;
              temp.ficha = item.ficha;
             
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
