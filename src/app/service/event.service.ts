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
    return this.http.post(this.url, {}).map((res: Response) => res.json());
  }

  getEvent(roomIds: number [] = []): Observable<any> {
    return this.http.get(this.url, {}).map((res: Response) => res.json());
  }

  // TODO: implement this delete method
  deleteEvent(eventId: number): Observable<any> {
    console.log('perform delete event', eventId);
    return this.http.get(this.url, {}).map((res: Response) => res.json());
  }

  // TODO: implement this update method
  updateEvent(eventId: number): Observable<any> {
    console.log('perform update event', eventId);
    return this.http.get(this.url, {}).map((res: Response) => res.json());
  }
}
