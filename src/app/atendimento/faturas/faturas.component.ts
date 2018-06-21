import { SdformatService } from './../../sdformat.service';
import { AtendimentoFireService } from './../atendimento-fire.service';
import { Fatura } from './fatura.model';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-faturas',
  templateUrl: './faturas.component.html',
  styleUrls: ['./faturas.component.css']
})
export class FaturasComponent implements OnInit {

  recibos:Fatura[] = [];
  select:Fatura;
  controle:boolean = false;
  valor:any = 0.00;
  fpag:string = 'Dinheiro';
  fat:Fatura;

  constructor(private fire : AtendimentoFireService, private sdformat: SdformatService, private modalService: NgbModal, private routes: Router, public toastr: ToastsManager,
    public vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.buscarRecibos();
  }

  buscarRecibos(){
          this.recibos.reverse();
          this.fire.buscaFaturas().then(x=> {
          var json = JSON.stringify(x);
          var obj = JSON.parse(json);
          
          for(let i in obj){
            var item = obj[i];
            this.fire.faturaDetail(item.key).then(y=> {
              var json2 = JSON.stringify(y);
              var obj2 = JSON.parse(json2);
              var temp:Fatura = new Fatura();
              temp.key = obj2.key;
              temp.dt_criada = this.sdformat.convertMiliDate(obj2.dt_criada);
              temp.key_cliente = obj2.key_cliente;
              temp.origem = obj2.origem;
              temp.vl_pago = obj2.vl_pago;
              temp.vl_total = obj2.vl_total;
              temp.status = obj2.status;
              this.recibos.push(temp);
              if(this.recibos.length > 0){
                this.recibos.reverse();
                this.controle = true;
              }else{            
                this.controle = false;
              }       
            });
          }
          
            
      });
  }

  open2(content, x:Fatura) { 
    this.fat = x;
    console.log(this.fat)
    this.modalService.open(content).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
