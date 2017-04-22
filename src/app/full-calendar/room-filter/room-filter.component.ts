import {Component, OnInit, trigger, state, transition, style, animate, EventEmitter, Output} from '@angular/core';
import {RoomService} from "../../service/room.service";
import {Room} from "../../model/room";
import {Store} from "@ngrx/store";
import {State} from "../../reducer";
import {ADD_ROOM, SELECT_ALL_ROOMS, SELECT_ROOM} from "../../action/room";


@Component({
  selector: 'room-filter',
  templateUrl: './room-filter.component.html',
  styleUrls: ['./room-filter.component.css'],
  providers: [RoomService],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('* => *', animate('0.5s'))
    ])
  ]
})
export class RoomFilterComponent implements OnInit {

  rooms: Room[] = [];

  isLoading: boolean = true;
  isInitRoomFilter: boolean = true;
  selectedRooms: number[];

  @Output() onEmitRooms = new EventEmitter<number[]>();

  constructor(private roomService: RoomService,
              private store: Store<State>) {
  }

  ngOnInit() {

    this.store.select('rooms').subscribe(state => {
      this.rooms = state['rooms'];
    });

    this.roomService.getAllRooms().subscribe(
      rooms => {
        this.store.dispatch({ type: ADD_ROOM, payload: rooms});
        this.isLoading = false;
        this.isInitRoomFilter = false;
      }
    );
  }

  selectRoom(room: Room) {

    /**
     * Select 'All rooms'
     */
    if (room.id === 0) {
      this.store.dispatch({ type: SELECT_ALL_ROOMS });
    }

    this.store.dispatch({ type: SELECT_ROOM, payload: room.id });
    this.onSelectRoom();
  }


  onSelectRoom() {

    this.selectedRooms = [];
    this.rooms.forEach((room) => {

      /**
       * if 'All Rooms' btn is selected, then return all room ids.
       */
      if (this.rooms[0].isSelected) {
        this.selectedRooms.push(room.id);
        return;
      }

      if (room.isSelected) {
        this.selectedRooms.push(room.id);
      }
    });

    this.onEmitRooms.emit(this.selectedRooms);
  }

  doLoading(loading: boolean) {
    this.isLoading = loading;
  }
}
