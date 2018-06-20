import { SdformatService } from './../sdformat.service';
import { PacModel } from './pac/pac.model';
import { FirebaseService } from './../firebase.service';
import { Injectable } from '@angular/core';
import { Sessao } from './sessoes/sessoes.model';

@Injectable()
export class ServicoFireService {

  constructor(private fire : FirebaseService, private sdformat: SdformatService) { }

  getClienteKey(){
    return this.fire.clienteKey.key;
  }

  salvarFichaPAC(ficha:PacModel, sessoes:Sessao[], nome:string, tipo:string){
    var newkey = this.fire.getKey('/PRONTUARIOS/GERAL/');

    var _ficha_geral = {
        key: newkey,
				key_cliente: this.fire.clienteKey.key,
				ficha: tipo,
				nome_ficha: nome,
				dt_cad: this.sdformat.getDataAtualMili()
    }

    this.fire.insertChild('/PRONTUARIOS/GERAL/', _ficha_geral, newkey);

    var _ficha_cliente = {
      key: newkey,
      dt_cad: this.sdformat.getDataAtualMili()
    }

    this.fire.insertChild('/PRONTUARIOS/CLIENTE/', _ficha_cliente, newkey);

    var _ficha = {
      key : newkey,
      perg1 : ficha.perg1,
      perg2 : ficha.perg2,
      perg3 : ficha.perg3,
      perg4 : ficha.perg4,
      perg5 : ficha.perg5,
      perg6 : ficha.perg6,
      perg7 : ficha.perg7,
      perg8 : ficha.perg8,
      perg9 : ficha.perg9,
      perg10 : ficha.perg10,
      perg11 : ficha.perg11,
      perg12 : ficha.perg12,
      perg13 : ficha.perg13,
      perg14 : ficha.perg14,

      perg1a : ficha.perg1a,
      perg2a : ficha.perg2a,
      perg3a : ficha.perg3a,
      perg4a : ficha.perg4a,
      perg5a : ficha.perg5a,
      perg6a : ficha.perg6a,
      perg7a : ficha.perg7a,
      perg8a : ficha.perg8a,
      perg9a : ficha.perg9a,
      perg10a : ficha.perg10a,
      perg11a : ficha.perg11a,
      perg12a : ficha.perg12a,
      perg13a : ficha.perg13a,
      perg14a : ficha.perg14a,

      perg15 : ficha.perg15,
      perg16 : ficha.perg16,
      perg17 : ficha.perg17,
      perg18 : ficha.perg18
    }

    this.fire.insertChild('/PRONTUARIOS/DATAIL/', _ficha, newkey);

    for(let i = 0 ; i < sessoes.length ; i++ ){
      var newSe = this.fire.getKey('/SESSOES/GERAL/');
      var _s = {
        key: newSe,
        key_cliente: this.fire.clienteKey.key,
        key_pront: newkey,
        dt_cad: sessoes[i].dt_cad,
        status: sessoes[i].status,
        nome: sessoes[i].nome,
        num: sessoes[i].num
      }

      this.fire.insertChild('/SESSOES/GERAL/', _s, newSe);

      var _c = {
        key: newSe,
        status: sessoes[i].status
      }

      this.fire.insertChild('/SESSOES/CLIENTE/'+this.fire.clienteKey.key+'/', _c, newSe);
    }

    



  }

  buscaFicha(){
    if(this.fire.fichaKey == '_false'){
      var ficha:PacModel = new PacModel('');
      return ficha;
    }else{
      var dado = this.fire.selectChild('/PRONTUARIOS/DATAIL/', this.fire.fichaKey);
      var json2 = JSON.stringify(dado);
              var obj2 = JSON.parse(json2);
              var temp:PacModel = new PacModel('');
             
              temp.key = obj2.key;
              temp.perg1 = obj2.perg1;
              temp.perg2 = obj2.perg2;
              temp.perg3 = obj2.perg3;
              temp.perg4 = obj2.perg4;
              temp.perg5 = obj2.perg5;
              temp.perg6 = obj2.perg6;
              temp.perg7 = obj2.perg7;
              temp.perg8 = obj2.perg8;
              temp.perg9 = obj2.perg9;
              temp.perg10 = obj2.perg10;
              temp.perg11 = obj2.perg11;
              temp.perg12 = obj2.perg12;
              temp.perg13 = obj2.perg13;
              temp.perg14 = obj2.perg14;

              temp.perg1a = obj2.perg1a;
              temp.perg2a = obj2.perg2a;
              temp.perg3a = obj2.perg3a;
              temp.perg4a = obj2.perg4a;
              temp.perg5a = obj2.perg5a;
              temp.perg6a = obj2.perg6a;
              temp.perg7a = obj2.perg7a;
              temp.perg8a = obj2.perg8a;
              temp.perg9a = obj2.perg9a;
              temp.perg10a = obj2.perg10a;
              temp.perg11a = obj2.perg11a;
              temp.perg12a = obj2.perg12a;
              temp.perg13a = obj2.perg13a;
              temp.perg14a = obj2.perg14a;

              temp.perg15 = obj2.perg15;
              temp.perg16 = obj2.perg16;
              temp.perg17 = obj2.perg17;
              temp.perg18 = obj2.perg18;
              temp.perg19 = obj2.perg19;
              temp.perg20 = obj2.perg20;
              temp.perg21 = obj2.perg21;
              temp.perg22 = obj2.perg22;
              temp.perg23 = obj2.perg23;
              temp.perg24 = obj2.perg24;
              temp.perg25 = obj2.perg25;
              temp.perg26 = obj2.perg26;
              temp.perg27 = obj2.perg27;
              temp.perg28 = obj2.perg28;

              return temp;
    }
  }

}
