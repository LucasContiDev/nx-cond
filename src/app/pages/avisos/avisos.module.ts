import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AvisosRoutingModule, routedComponents } from './avisos-routing.module';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  imports: [
    ThemeModule,
    AvisosRoutingModule,
    ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AvisosModule { }
