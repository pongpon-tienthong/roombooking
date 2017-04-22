import * as fromRoom from "./room";

/**
 * All states
 */
export interface State {
  rooms: fromRoom.State;
}

/**
 * All reducers
 */
export const reducers = {
  rooms: fromRoom.reducer
};

