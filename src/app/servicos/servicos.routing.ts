import { PacoComponent } from './paco/paco.component';
import { PacComponent } from './pac/pac.component';
import { Routes } from '@angular/router';
import { AuthguardGuard } from './../authguard.guard';
import { PeComponent } from './pe/pe.component';


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
    },{
      path: 'pe',
      component: PeComponent,
      data: {
        title: 'Avaliação de Estrias',
        urls: [{title: 'Avaliação',url: '/pe'},{title: 'PE'}]
      },
      canActivate: [AuthguardGuard]
    },{
      path: 'paco',
      component: PacoComponent,
      data: {
        title: 'Avaliação Corporal',
        urls: [{title: 'Avaliação',url: '/paco'},{title: 'PAC'}]
      },
      canActivate: [AuthguardGuard]
    },{
      path: 'orto',
      component: PacoComponent,
      data: {
        title: 'Avaliação Ortopedia',
        urls: [{title: 'Avaliação',url: '/orto'},{title: 'Ortopedia'}]
      },
      canActivate: [AuthguardGuard]
    }
    ]
  }
];
