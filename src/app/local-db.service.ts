import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class LocalDbService {

  pacientes:any[] = [];

  constructor(protected localStorage: LocalStorage, private fire: FirebaseService) { }

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

  atualizaDB(){
    this.fire.selectIntervalFist( '/CLIENTES/GERAL/', 'dt_cont', this.fire.versaoDBlocal ).then(x=> {
      var username = x.val();
      var json = JSON.stringify(username);
      var obj = JSON.parse(json);

      if( this.pacientes.length == 0){
        console.log('zero')
        let ct = 0;
        for(let i in obj){
            var item = obj[i];
            this.insertItem( String(ct), item );
            this.pacientes.push(item);
            ct = ct + 1; 
        }
      }else{
          for(let i in obj){
              var item = obj[i];
              var controle = 1;
                  for(let j=0; j<this.pacientes.length;j++){                    
                    if(item.key == this.pacientes[j].key){                  
                      this.insertItem( String(j), item );
                      this.pacientes[j] = item;
                      controle = 1;
                      break;
                    }else{
                      controle = this.pacientes.length + 1;
                    }

                  }
                  if(controle != 1){
                    this.insertItem( String(controle), item );
                    this.pacientes.push(item);
                  }
            
          }
     }
    });
    this.fire.versaoDBlocal = new Date().getTime().toString();
    localStorage.setItem('sdLocal', this.fire.versaoDBlocal);
  
  }
}
