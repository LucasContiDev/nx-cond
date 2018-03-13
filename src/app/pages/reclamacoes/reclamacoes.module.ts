import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ResponderRoutingModule, routedComponents } from './reclamacoes-routing.module';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  imports: [
    ThemeModule,
    ResponderRoutingModule,
    ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ReclamacoesModule { }
