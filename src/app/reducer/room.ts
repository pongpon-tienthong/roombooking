import {Action} from '@ngrx/store';
import * as room from '../action/room';
import {Room} from "../model/room";

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
    case room.ADD_ROOM:
      const newRooms = action.payload;
      return {
        rooms: [ ...state.rooms, ...newRooms ]
      };
    case room.RESET:
      return initialState;
    default:
      return state;
  }
}
