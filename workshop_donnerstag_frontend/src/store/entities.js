import { combineReducers } from "redux";
import gatewayReducer from "./entities/gateway";

export default combineReducers({
  gateway: gatewayReducer,
  // config: configReducer,
  // ports: portsReducer,
});
