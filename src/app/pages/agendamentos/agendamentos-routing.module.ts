import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendamentosComponent } from './agendamentos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { AgendamentosSelecaoComponent } from './agendamentos-selecao/agendamentos-selecao.component';
import { AgendamentosCadastrarComponent } from './agendamentos-cadastrar/agendamentos-cadastrar.component';


const routes: Routes = [{
  path: '',
  component: AgendamentosComponent,
  children: [{
    path: 'calendario',
    component: CalendarioComponent,
  },
  {
    path: 'agendamentos-selecao',
    component: AgendamentosSelecaoComponent,
  },
  {
    path: 'agendamentos-cadastrar',
    component: AgendamentosCadastrarComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AgendamentosRoutingModule {

}

export const routedComponents = [
  AgendamentosComponent,
  CalendarioComponent,
  AgendamentosSelecaoComponent,
  AgendamentosCadastrarComponent,
];
