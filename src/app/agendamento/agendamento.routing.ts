import { ConsultaComponent } from './consulta/consulta.component';
import { Routes } from '@angular/router';
import { AuthguardGuard } from './../authguard.guard';


export const AgendamentoRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'consulta',
      component: ConsultaComponent,
      data: {
        title: 'Agendamento de Consultas',
        urls: [{title: 'Agendamento',url: '/consulta'},{title: 'Consulta'}]
      }
    }
    ]
  }
];
