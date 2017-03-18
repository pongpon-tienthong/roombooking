import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class RoomService {

  private url: string = 'http://58cccb6f88d2f01200229ef0.mockapi.io/api/v1/room';

  constructor(private http: Http) {
  }

  // TODO: add err handler
  getAllRooms(): Observable<any> {
    return this.http.get(this.url, {}).map((res: Response) => res.json());
  }

}
