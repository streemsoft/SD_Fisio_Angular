import { Anamnese } from './anamnese/anamnese.model';
import { FirebaseService } from './../firebase.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AtendimentoFireService {

  constructor(private fire: FirebaseService) { }

  //Anamnese -----------------------------------------------
  buscaFicha(){
    return this.fire.selectChild('/ANAMNESE/', this.fire.clienteKey.key);
  }

  atualizaFicha(ficha:Anamnese){
    if(this.fire.clienteKey != '_false'){
      this.fire.updateChild( '/ANAMNESE/', ficha );
    }
  }

  //--------------------------------------------------------
  
  //Recibos ------------------------------------------------
  buscaRecibos(){
    return this.fire.selectChild('/RECIBOS/CLIENTE/', this.fire.clienteKey.key+'/');
  }

  reciboDetail(key:string){
    return this.fire.selectChild('/RECIBOS/GERAL/', key);
  }

  //Sessoes -----------------------------------------------
  buscaSessoes(){
    return this.fire.selectChildEqual('/SESSOES/CLIENTE/'+this.fire.clienteKey.key+'/','status','Pendente');
  }

  buscaSessoesGeral(key:string){
    return this.fire.selectChild('/SESSOES/GERAL/', key);
  }

}
