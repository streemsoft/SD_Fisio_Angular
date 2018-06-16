import { FaturasComponent } from './faturas/faturas.component';
import { SessoesComponent } from './sessoes/sessoes.component';
import { AnamneseComponent } from './anamnese/anamnese.component';
import { ProntuariosComponent } from './prontuarios/prontuarios.component';
import { Component } from '@angular/core';
import { AtendRouterComponent } from './atend-router/atend-router.component';
import { Routes } from '@angular/router';
import { AuthguardGuard } from './../authguard.guard';
import { RecibosComponent } from './recibos/recibos.component';


export const AtendimentoRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'consulta',
      component: AtendRouterComponent,
      data: {
        title: 'Atendimento ao Paciente',
        urls: [{title: 'Paciente',url: '/consulta'},{title: 'Atendimento ao Paciente'}]
      },
      children:[
        {
          path: 'prontuario',
          component: ProntuariosComponent,
          data: {
            title: 'Atendimento ao Paciente',
            urls: [{title: 'Paciente',url: '/prontuario'},{title: 'Prontuário'}]
          },
          canActivate: [AuthguardGuard]
       },{
          path: 'anamnese',
          component: AnamneseComponent,
          data: {
            title: 'Atendimento ao Paciente',
            urls: [{title: 'Paciente',url: '/anamnese'},{title: 'Anamnese'}]
          },
          canActivate: [AuthguardGuard]
       },{
          path: 'sessoes',
          component: SessoesComponent,
          data: {
            title: 'Atendimento ao Paciente',
            urls: [{title: 'Paciente',url: '/sessoes'},{title: 'Sessões'}]
          },
          canActivate: [AuthguardGuard]
        },{
            path: 'faturas',
            component: FaturasComponent,
            data: {
              title: 'Atendimento ao Paciente',
              urls: [{title: 'Paciente',url: '/faturas'},{title: 'Faturas'}]
            },
            canActivate: [AuthguardGuard]
         },{
            path: 'recibos',
            component: RecibosComponent,
            data: {
              title: 'Atendimento ao Paciente',
              urls: [{title: 'Paciente',url: '/recibos'},{title: 'Recibos'}]
            },
            canActivate: [AuthguardGuard]
         }
      ],
      canActivate: [AuthguardGuard]
    }
    ]
  }
];
