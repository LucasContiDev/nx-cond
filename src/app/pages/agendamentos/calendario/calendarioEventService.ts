import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
    constructor(private http: Http) {}

    getEvents() {
        // tslint:disable-next-line:max-line-length
        return this.http.get('https://www.googleapis.com/calendar/v3/calendars/lgku0n9agb8g503nosfb94sc3k@group.calendar.google.com/events')
                    .toPromise()
                    .then(res => <any[]> res.json().data)
                    .then(data => data);
    }
}
