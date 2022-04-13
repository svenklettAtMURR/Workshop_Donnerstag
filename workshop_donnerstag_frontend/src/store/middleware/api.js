import * as actions from "../api";
import http from "./../../services/httpService";

/**
 * @todo: muss noch überdacht werden
 */
const DUMMY = true;
let _host;
if (process.env.NODE_ENV !== "production") {
  // Host with static IP address used for development only!!!
  _host = DUMMY ? "http://localhost:9001" : "http://192.168.138.6";
} else {
  _host = "";
}

const baseURL = _host + "/iolink/v1/";

/**
 * middleware api:
 *
 * 1) dispatch onStart reducer
 * 2) request data
 *      -> method === "store" data is already given
 *      -> otherwise request data from api endpoint and await response
 * 3) analyse response
 *    - on success: dispatch onSuccess reducer with responded data
 *    - on api call failed: dispatch onError reducer with error message
 *
 */
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const {
      url,
      method,
      data,
      label = "",
      onStart,
      onSuccess,
      onError,
    } = action.payload;

    if (onStart) dispatch({ type: onStart, payload: { method, data } });

    next(action);

    try {
      let response = null;

      /* if data only have to been updated we dont need an http request and update the given data direct in store */
      if (method === "updateStore") {
        response = { data };
      } else {
        response = await http.request({
          baseURL,
          url,
          method,
          data,
        });
      }
      // General
      dispatch(actions.apiCallSuccess(response.data));
      // Specific
      if (onSuccess)
        dispatch({
          type: onSuccess,
          payload: { data: response.data, method, label },
        });
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error.message));
      // Specific
      if (onError)
        dispatch({
          type: onError,
          payload: { errorMsg: error.message, label },
        });
    }
  };

export default api;
