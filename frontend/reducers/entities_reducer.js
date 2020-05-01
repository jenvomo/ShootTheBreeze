import { combineReducers } from "redux";
import roomsReducer from '../reducers/rooms_reducer';
import messagesReducer from '../reducers/messages_reducer';

const entitiesReducer = combineReducers({
  rooms: roomsReducer,
  messages: messagesReducer
})

export default entitiesReducer;