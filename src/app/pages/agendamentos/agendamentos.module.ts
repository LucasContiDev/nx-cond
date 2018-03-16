import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { AgendamentosRoutingModule, routedComponents } from './agendamentos-routing.module';
import {ScheduleModule} from 'primeng/schedule';

@NgModule({
  imports: [
    ThemeModule,
    AgendamentosRoutingModule,
    ScheduleModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AgendamentosModule { }
