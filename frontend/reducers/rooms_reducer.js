import { RECEIVE_ROOM } from "../components/actions/room_actions";

const rootReducers = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      return action.room;
    default:
      return state;
  }
}

export default rootReducers;