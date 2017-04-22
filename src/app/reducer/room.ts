import {Action} from '@ngrx/store';
import {Room} from "../model/room";
import {ADD_ROOM, SELECT_ALL_ROOMS, SELECT_ROOM, RESET} from "../action/room";

export interface State {
  rooms: Room[];
};

const initialState: State = {
  rooms: [
    new Room({
      id: 0,
      name: 'All rooms',
      description: 'Dummy All Room Btn',
      btnColor: 'bg-red',
      status: 'active'
    })
  ],
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_ROOM:
      let newRooms = action.payload;
      return {
        rooms: [ ...state.rooms, ...newRooms ]
      };
    case SELECT_ALL_ROOMS:
      let selectedAllRooms = state.rooms.map(room => {
        if (room.id === 0) {
          room.isSelected = true;
        }

        room.isSelected = false;
        return room;
      });

      return {
        rooms: selectedAllRooms
      };
    case SELECT_ROOM:
      let id = action.payload;
      let selectedRooms = state.rooms.map(room => {
        if (room.id === 0) {
          room.isSelected = false;
        }

        if (room.id === id) {
          room.isSelected = !room.isSelected;
        }

        return room;
      });
      return {
        rooms: selectedRooms
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
