import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclamacoesComponent } from './reclamacoes.component';
import { ResponderComponent } from './responder/responder.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [{
  path: '',
  component: ReclamacoesComponent,
  children: [{
    path: 'responder',
    component: ResponderComponent,
  }, {
    path: 'listagem',
    component: ListagemComponent,
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
export class ResponderRoutingModule {

}

export const routedComponents = [
  ReclamacoesComponent,
  ResponderComponent,
  ListagemComponent,
];
