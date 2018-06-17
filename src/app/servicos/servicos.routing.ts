import { PacComponent } from './pac/pac.component';
import { Routes } from '@angular/router';
import { AuthguardGuard } from './../authguard.guard';


export const ServicoRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'pac',
      component: PacComponent,
      data: {
        title: 'Avaliação de Acne e Seborreia',
        urls: [{title: 'Avaliação',url: '/pac'},{title: 'PAS'}]
      },
      canActivate: [AuthguardGuard]
    }
    ]
  }
];
