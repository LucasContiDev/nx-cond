import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { AgendamentosRoutingModule, routedComponents } from './agendamentos-routing.module';
import { ScheduleModule } from 'primeng/schedule';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  imports: [
    ThemeModule,
    AgendamentosRoutingModule,
    ScheduleModule,
    ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AgendamentosModule { }
