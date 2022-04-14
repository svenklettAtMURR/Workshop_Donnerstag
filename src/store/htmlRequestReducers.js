/**
 *
 * @returns data object with meta data
 */
export function DataObj() {
  return {
    data: {},
    loading: false,
    lastFetch: null,
    lastPost: null,
    lastUpdate: null,
    errorMsg: null,
  };
}

/**
 * template requested reducer function
 *
 * @param {string} sliceName
 * @param {string} cat
 * @returns requestedReducer function
 */
export function requestedReducer(sliceName, cat) {
  return (sliceName, action) => {
    sliceName[cat].loading = true;
    sliceName[cat].error = null;

    /* add timestamp to posts and updates */
    if (action.payload.method === "post") sliceName[cat].lastPost = Date.now();
    else if (action.payload.method === "updateStore")
      sliceName[cat].lastUpdate = Date.now();
  };
}

/**
 * template received reducer function
 *
 * @param {string} sliceName
 * @param {string} cat
 * @returns receivedReducer function
 */
export function receivedReducer(sliceName, cat) {
  return (sliceName, action) => {
    sliceName[cat].data = action.payload.data;
    sliceName[cat].loading = false;
    /* add timestamp to get responses */
    if (action.payload.method === "get") sliceName[cat].lastFetch = Date.now();
  };
}
/**
 * template request failed reducer function
 *
 * @param {string} sliceName
 * @param {string} cat
 * @returns requestFailedReducer function
 */
export function requestFailedReducer(sliceName, cat) {
  return (sliceName, action) => {
    sliceName[cat].loading = false;
  };
}

/**
 * template requested post reducer function
 *
 * @param {string} sliceName
 * @param {string} cat
 * @returns requestedPostReducer function
 */
export function requestedPostReducer(sliceName, cat) {
  return (sliceName, action) => {
    sliceName[cat].loading = true;
    sliceName[cat].error = null;
    sliceName[cat].lastPost = Date.now();
  };
}

/**
 * template data posted reducer function
 *
 * @param {string} sliceName
 * @param {string} cat
 * @returns dataChangedReducer
 */
export function postedReducer(sliceName, cat) {
  return (sliceName, action) => {
    sliceName[cat].loading = false;
  };
}

/**
 * template post failed reducer function
 *
 * @param {string} sliceName
 * @param {string} cat
 * @returns postFailedReducer function
 */
export function postFailedReducer(sliceName, cat) {
  return (sliceName, action) => {
    sliceName[cat].loading = false;

    /**
     * @todo: - überlegen was wir hier im Fehlerfall machen. wird das schon in der middlware abgefangen
     *        - Fehler in requestedReducer nullen
     */

    console.log(`Post failed:  ${action.payload}`);
    sliceName[cat].error = action.payload;
  };
}
