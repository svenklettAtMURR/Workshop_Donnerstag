import { combineReducers } from "redux";
import entitiesReducer from "./entities";

/**
 * Combine all reducers
 */
export default combineReducers({
  entities: entitiesReducer,
  // gateway: gatewayReducer,
});
