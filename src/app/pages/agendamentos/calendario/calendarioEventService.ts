import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
    constructor(private http: Http) {}

    getEvents() {
        return this.http.get('showcase/resources/data/scheduleevents.json')
                    .toPromise()
                    .then(res => <any[]> res.json().data)
                    .then(data => data);
    }
}
