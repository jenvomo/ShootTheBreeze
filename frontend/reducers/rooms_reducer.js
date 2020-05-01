import { RECEIVE_ROOM } from "../actions/room_actions";

const roomsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      return action.data.room;
    default:
      return state;
  }
}

export default roomsReducer;