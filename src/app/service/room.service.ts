import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Room} from "../model/room";

@Injectable()
export class RoomService {

  private url;

  constructor(private http: Http) {
    this.url = `${environment.roombookingApi}/room`
  }

  getAllRooms(): Observable<any> {
    return this.http.get(this.url, {}).map((res: Response) =>
      res.json().map(room => new Room(room))
    );
  }

}
