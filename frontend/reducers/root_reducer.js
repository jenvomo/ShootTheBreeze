import { combineReducers } from "redux";
import entitiesReducer from './entities_reducer';

const rootReducers = combineReducers({
  entities: entitiesReducer
})

export default rootReducers;