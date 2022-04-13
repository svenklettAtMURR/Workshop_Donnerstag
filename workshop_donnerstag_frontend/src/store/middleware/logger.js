/**
 * Logs all actions and states after they are dispatched.
 */
/*                          S         N           A           */
const logger = (param) => (store) => (next) => (action) => {
  if (param.destination === "console") {
    console.group(action.type);
    console.info("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
  } else return next(action);
};

export default logger;

// Currying
// N => 1
