import { FinanceiroFireService } from './financeiro-fire.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ToastModule } from 'ng2-toastr';
import { NgxMaskModule } from 'ngx-mask';
import { FinanceiroRoutes } from './financeiro.routing';
import { BoletosComponent } from './boletos/boletos.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(FinanceiroRoutes),
    ToastModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  declarations: [BoletosComponent, FaturamentoComponent],
  providers: [FinanceiroFireService]
})
export class FinanceiroModule { }
