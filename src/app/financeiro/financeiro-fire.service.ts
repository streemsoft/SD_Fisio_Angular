import { FirebaseService } from './../firebase.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FinanceiroFireService {

  constructor(private fire: FirebaseService) { }

  buscarBoletos(){
    return this.fire.selectChild('', '/BOLETOS/');
  }

  reciboDetail(ini:string, fim:string){
    return this.fire.selectInterval('/RECIBOS/GERAL/','dt_cad',ini,fim);
  }

}
