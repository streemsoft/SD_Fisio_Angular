import { AtendimentoFireService } from './../atendimento-fire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrls: ['./recibos.component.css']
})
export class RecibosComponent implements OnInit {

  constructor(private fire : AtendimentoFireService) { }

  ngOnInit() {
  }

  buscarRecibos(){
    
  }

}
