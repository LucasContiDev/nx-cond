import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisosComponent } from './avisos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [{
  path: '',
  component: AvisosComponent,
  children: [{
    path: 'cadastrar',
    component: CadastrarComponent,
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
export class AvisosRoutingModule {

}

export const routedComponents = [
  AvisosComponent,
  CadastrarComponent,
  ListagemComponent,
];
