import { Injectable } from '@angular/core';

@Injectable()
export class SdformatService {

  constructor() { }

  getDataAtualMili(){
    var hj = new Date();
    hj.setHours(0);
    hj.setMinutes(0);
    hj.setSeconds(0);
    hj.setMilliseconds(0);

    return hj.getTime().toString();
  }

  convertDateMili(_data:string){
    var d = _data.split('-');

    return new Date(d[1]+'/'+d[2]+'/'+d[0]).getTime().toString();
  }

}
