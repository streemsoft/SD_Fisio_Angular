import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class LocalDbService {

  pacientes:any[] = [];

  constructor(protected localStorage: LocalStorage) { }

  insertItem( id:string , child:any ){
    this.localStorage.setItem( id , child ).subscribe(() => {
      return true;
    }, () => {
      return false;
    });
  }

  insertListItem(childs:any[]){
    let result = true;
    for(let i = 0 ; i < childs.length ; i++){
      if(this.insertItem(String(i) ,childs[i])){
        continue;
      }else{
        result = false;
        break;
      }
    }
    return result;
  }

  getItem( id:string ){
    let result = null;
    this.localStorage.getItem<any>( id ).subscribe((user) => {
      result = user;
    });

    return result;
  }

  getListItem(){
    let control = true;
    let i = 0;
    let dados = [];
    while(control){
      let result = this.getItem(String(i));
      if(result != null){
        dados.push(result);
        i = i + 1;
      }else{
        control = false;
      }
    }
    this.pacientes = [];
    this.pacientes = dados;
  }

  removeItem( id:string ){
    this.localStorage.removeItem( id ).subscribe(() => {});
  }

  removerTudo(){
    this.localStorage.clear().subscribe(() => {});
  }

}
