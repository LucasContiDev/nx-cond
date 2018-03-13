import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnquetesComponent } from './enquetes.component';
import { EnquetesCadastrosComponent } from './enquetes-cadastros/enquetes-cadastros.component';
import { EnquetesVisualizarComponent } from './enquetes-visualizar/enquetes-visualizar.component';

const routes: Routes = [{
  path: '',
  component: EnquetesComponent,
  children: [{
    path: 'cadastros',
    component: EnquetesCadastrosComponent,
  }, {
    path: 'visualizar',
    component: EnquetesVisualizarComponent,
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
export class EnquetesRoutingModule {

}

export const routedComponents = [
  EnquetesComponent,
  EnquetesVisualizarComponent,
  EnquetesCadastrosComponent,
];
