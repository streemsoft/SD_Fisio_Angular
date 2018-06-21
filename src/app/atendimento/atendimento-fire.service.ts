import { Anamnese } from './anamnese/anamnese.model';
import { FirebaseService } from './../firebase.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AtendimentoFireService {

  constructor(private fire: FirebaseService) { }

  getNomePaciente(){
    return this.fire.clienteKey.nome;
  }

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

  //Faturas -----------------------------------------------
  buscaFaturas(){
    return this.fire.selectChild('/FATURAS/CLIENTE/', this.fire.clienteKey.key+'/');
  }

  faturaDetail(key:string){
    return this.fire.selectChild('/FATURAS/GERAL/', key);
  }

  //Prontuarios -----------------------------------------------
  buscarProntuarios(){
    return this.fire.selectChildEqual('/PRONTUARIOS/GERAL/','key_cliente', this.fire.clienteKey.key);
  }

  setProntuarioKey(key:string){
    this.fire.fichaKey = key;
  }


}
