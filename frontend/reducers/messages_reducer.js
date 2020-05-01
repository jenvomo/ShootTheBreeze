import { RECEIVE_ROOM } from "../actions/room_actions"
import { RECEIVE_MESSAGE } from "../actions/message_actions";

const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      return Object.assign({}, state, action.data.messages)
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, { [action.message.id]: action.message });
    default:
      return state;
  }
}

export default messagesReducer;