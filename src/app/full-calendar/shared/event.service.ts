import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

@Injectable()
export class EventService {

  private url: string = 'http://58cab65100ff5b12007696e3.mockapi.io/api/v1/event';

  constructor(private http: Http) {
  }

  // TODO: add err handler
  addEvent(): Observable<any> {

    // return {
    //   eventId: 1,
    //   title: 'TITLE',
    //   locationName: 'UPPER ROOM',
    //   locationId: 1,
    //   layout: 'standard',
    //   start: '29/12/2017 15:30',
    //   end: '29/12/2017 19:30',
    //   description: 'TEST',
    //   allDay: false,
    //   contactName: 'Pongpon Tienthong',
    //   contactNumber: '096-141-5653',
    //   contactEmail: 'pongpon.tienthong@gmail.com',
    //   sendEmail: true,
    //   repeat: 'none'
    // }

    return this.http.post(this.url, {}).map((res: Response) => res.json());
  }

  getEvent(roomIds: number [] = []): Observable<any> {
    return this.http.get(this.url, {}).map((res: Response) => res.json());
  }
}
