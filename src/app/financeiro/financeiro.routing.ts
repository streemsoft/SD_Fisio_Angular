import { FaturamentoComponent } from './faturamento/faturamento.component';
import { BoletosComponent } from './boletos/boletos.component';
import { Routes } from '@angular/router';

import { AuthguardGuard } from './../authguard.guard';


export const FinanceiroRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'boletos',
      component: BoletosComponent,
      data: {
        title: 'Boletos',
        urls: [{title: 'Financeiro',url: '/boletos'},{title: 'Boletos'}]
      },
      canActivate: [AuthguardGuard]
    },{
      path: 'faturamento',
      component: FaturamentoComponent,
      data: {
        title: 'Faturamento',
        urls: [{title: 'Financeiro',url: '/faturamento'},{title: 'Faturamento'}]
      },
      canActivate: [AuthguardGuard]
    }
    ]
  }
];
