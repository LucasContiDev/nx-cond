import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegimentoComponent } from './regimento.component';
import { RegimentoCadastrarComponent } from './regimento-cadastrar/regimento-cadastrar.component';

const routes: Routes = [{
  path: '',
  component: RegimentoComponent,
  children: [{
    path: 'regimento-cadastrar',
    component: RegimentoCadastrarComponent,
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
];
