import { Component } from '@angular/core';
import { EventService } from './calendarioEventService';

@Component({
  selector: 'ngx-calendario',
  styleUrls: ['./calendario.component.scss'],
  templateUrl: './calendario.component.html',
})
export class CalendarioComponent {
    eventService: any;
    events: any[];
    headerConfig: any;

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.eventService.getEvents().then(events => {this.events = events; });

        this.headerConfig = {
            left: 'prev,next hoje',
            center: 'Hoje',
            right: 'month,agendaWeek,agendaDay',
        };
    }

    loadEvents(event) {
        const start = event.view.start
        const end = event.view.end
        this.events = this.eventService.getEvents().then(events => {this.events = events; });
    }
}
