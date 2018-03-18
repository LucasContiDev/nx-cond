import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { RegimentoRoutingModule, routedComponents } from './regimento-routing.module';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  imports: [
    ThemeModule,
    RegimentoRoutingModule,
    ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class RegimentoModule { }
