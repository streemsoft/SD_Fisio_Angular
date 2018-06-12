import { BuscaComponent } from './busca/busca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Routes } from '@angular/router';

import { AuthguardGuard } from './../authguard.guard';
import { ManutencaoComponent } from './manutencao/manutencao.component';


export const PacientesRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'cadastro',
      component: CadastroComponent,
      data: {
        title: 'Cadastro de Paciente',
        urls: [{title: 'Paciente',url: '/cadastro'},{title: 'Cadastro'}]
      },
      canActivate: [AuthguardGuard]
    },
    {
        path: 'manutencao',
        component: ManutencaoComponent,
        data: {
          title: 'Manutenção de Cadastro',
          urls: [{title: 'Paciente',url: '/manutencao'},{title: 'Manutenção'}]
        },
        canActivate: [AuthguardGuard]
      },
      {
        path: 'busca',
        component: BuscaComponent,
        data: {
          title: 'Buscar Paciente',
          urls: [{title: 'Paciente',url: '/busca'},{title: 'Busca'}]
        },
        canActivate: [AuthguardGuard]
      }
    ]
  }
];
