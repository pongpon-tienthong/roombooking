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
  allRoom: Room = new Room(0, 'All Rooms', 'bg-red');
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

}
