import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { EventService } from './calendarioEventService';
import { color } from 'd3-color';

@Component({
  selector: 'ngx-calendario',
  styleUrls: ['./calendario.component.scss'],
  templateUrl: './calendario.component.html',
})
export class CalendarioComponent {
    eventService: any;
    events: any[];
    headerConfig: any;
    selectable: true;

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.headerConfig = {
            themeSystem: 'bootstrap4',
            theme: false,
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay',
            prev: 'fa-chevron-left',
            next: 'fa-chevron-right',
            Location: 'pt-br',
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
