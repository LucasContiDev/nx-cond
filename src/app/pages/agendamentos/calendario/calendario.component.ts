import { Location } from '@angular/common';
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
        this.headerConfig = {
            theme: true,
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay',
            Location: 'pt-br',
            close: 'fa-times',
            prevMonth: 'fa-angle-double-left',
            nextMonth: 'fa-angle-double-right',
            prev: 'circle-triangle-w',
            next: 'circle-triangle-e',
            prevYear: 'seek-prev',
            nextYear: 'seek-next',
            }
        }

    back(fc) {
        fc.prev();
    }

    loadEvents(event) {
        const start = event.view.start
        const end = event.view.end
        this.events = this.eventService.getEvents().then(events => {this.events = events; });
    }
}
