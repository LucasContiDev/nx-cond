import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegimentoComponent } from './regimento.component';
import { RegimentoCadastrarComponent } from './regimento-cadastrar/regimento-cadastrar.component';
import { RegimentoVisualizarComponent } from './regimento-visualizar/regimento-visualizar.component';

const routes: Routes = [{
  path: '',
  component: RegimentoComponent,
  children: [{
    path: 'regimento-cadastrar',
    component: RegimentoCadastrarComponent,
  },
  {
    path: 'regimento-visualizar',
    component: RegimentoVisualizarComponent,
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
export class RegimentoRoutingModule {

}

export const routedComponents = [
  RegimentoComponent,
  RegimentoCadastrarComponent,
  RegimentoVisualizarComponent,
];
