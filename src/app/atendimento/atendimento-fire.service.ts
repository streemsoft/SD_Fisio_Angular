import { Anamnese } from './anamnese/anamnese.model';
import { FirebaseService } from './../firebase.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AtendimentoFireService {

  constructor(private fire: FirebaseService) { }

  buscaFicha(){
    return this.fire.selectChild('/ANAMNESE/', this.fire.clienteKey.key);
  }

  atualizaFicha(ficha:Anamnese){
    if(this.fire.clienteKey != '_false'){
      this.fire.updateChild( '/ANAMNESE/', ficha );
    }
  }

}
