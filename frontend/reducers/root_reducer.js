import { combineReducers } from "redux";
import roomsReducer from '../reducers/rooms_reducer';

const rootReducers = combineReducers({
  rooms: roomsReducer
})

export default rootReducers;