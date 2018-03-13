import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { EnquetesRoutingModule, routedComponents } from './enquetes-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    EnquetesRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class EnquetesModule { }
