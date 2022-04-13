import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

import moment from "moment";

/**
 * template for an load data action creator
 * @param {string} label
 * @param {string} sliceName
 * @param {string} cat
 * @param {string} apiEndpoint
 * @param {fn} onStart
 * @param {fn} onSuccess
 * @param {fn} onError
 * @returns loadDataActionCreator
 */
export function loadDataActionCreator(
  label,
  sliceName,
  cat,
  apiEndpoint,
  onStart,
  onSuccess,
  onError
) {
  return () => (dispatch, getState) => {
    const { lastFetch } = getState().entities[sliceName][cat];

    const diffInMilliseconsds = moment().diff(
      moment(lastFetch),
      "milliseconds"
    );
    if (diffInMilliseconsds < 250) return;

    return dispatch(
      apiCallBegan({
        label,
        url: apiEndpoint,
        method: "get",
        onStart: onStart.type,
        onSuccess: onSuccess.type,
        onError: onError.type,
      })
    );
  };
}

/**
 * template for an post data action creator
 *
 * @param {string} label
 * @param {string} sliceName
 * @param {string} cat
 * @param {string} apiEndpoint
 * @param {fn} onStart
 * @param {fn} onSuccess
 * @param {fn} onError
 * @returns postDataActionCreator
 */
export function postDataActionCreator(
  label,
  sliceName,
  cat,
  apiEndpoint,
  onStart,
  onSuccess,
  onError
) {
  return (data) => (dispatch, getState) => {
    const { lastPost } = getState().entities[sliceName][cat];

    const diffInMilliseconsds = moment().diff(moment(lastPost), "milliseconds");
    if (diffInMilliseconsds < 250) return;

    return dispatch(
      apiCallBegan({
        label,
        method: "post",
        data,
        url: apiEndpoint,
        onStart: onStart.type,
        onSuccess: onSuccess.type,
        onError: onError.type,
      })
    );
  };
}

/**
 * @todo: maybe this file is not the perfect place for this creator cause it has not directly impact of the html request
 *
 *
 * template for an store data action creator
 * @param {string} label
 * @param {string} sliceName
 * @param {string} cat
 * @param {fn} onStart
 * @param {fn} onSuccess
 * @param {fn} onError
 * @returns storeDataActionCreator
 */
export function updateDataActionCreator(
  label,
  sliceName,
  cat,
  onStart,
  onSuccess,
  onError
) {
  return (data) => (dispatch, getState) => {
    const { lastUpdate } = getState().entities[sliceName][cat];

    const diffInMilliseconsds = moment().diff(
      moment(lastUpdate),
      "milliseconds"
    );
    if (diffInMilliseconsds < 250) return;

    return dispatch(
      apiCallBegan({
        label,
        method: "updateStore",
        data,
        onStart: onStart.type,
        onSuccess: onSuccess.type,
        onError: onError.type,
      })
    );
  };
}

/**
 *  * @todo: maybe this file is not the perfect place for this creator cause it has not directly impact of the html request
 *
 * template get data action creator
 *
 * @param {string} sliceName
 * @param {string} cat
 * @returns getDataActionCreator
 */
export function getDataActionCreator(sliceName, cat) {
  return createSelector(
    (state) => state.entities[sliceName][cat],
    (cat) => cat.data
  );
}
