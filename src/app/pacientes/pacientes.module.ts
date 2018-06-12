import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ToastModule } from 'ng2-toastr';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {NgxMaskModule} from 'ngx-mask';
import { PacientesFireService } from './pacientes-fire.service';
import { PacientesRoutes } from './pacientes.routing';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { BuscaComponent } from './busca/busca.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(PacientesRoutes),
    ToastModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgxDatatableModule,
    Ng2SmartTableModule
  ],
  declarations: [CadastroComponent, ManutencaoComponent, BuscaComponent],
  providers:[PacientesFireService]
})
export class PacientesModule { }
