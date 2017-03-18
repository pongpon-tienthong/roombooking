import { Component, OnInit, trigger, state, transition, style, animate } from '@angular/core';
import { RoomService } from "../shared/room.service";
import { Room } from "../shared/room";

@Component({
  selector: 'room-filter',
  templateUrl: './room-filter.component.html',
  styleUrls: ['./room-filter.component.css'],
  providers: [RoomService],
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('0.5s'))
    ])
  ]
})
export class RoomFilterComponent implements OnInit {

  rooms: Room[] = [];
  allRoom: Room = new Room(0, 'All Rooms', 'bg-red', false);
  isLoading: boolean = true;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getAllRooms().subscribe(
      res => {
        this.rooms.push(this.allRoom);
        this.rooms = this.rooms.concat(res);
        this.isLoading = false;
      }
    );
  }

  selectRoom(room: Room) {

    /**
     * if 'All Rooms' btn is selected, then deselect other buttons.
     */
    if(room.id === 0 && !room.isSelected) {
      this.rooms = this.rooms.map((room) => {
        room.isSelected = false;
        return room;
      })
    }

    /**
     * if any btn except 'All Rooms' btn is selected
     * while 'All Rooms' btn is still selected,
     * then deselect 'All Rooms' btn.
     */
    if(room.id !== 0 && this.rooms[0].isSelected) {
      this.rooms[0].isSelected = false;
    }

    room.isSelected = !room.isSelected;
  }
}
