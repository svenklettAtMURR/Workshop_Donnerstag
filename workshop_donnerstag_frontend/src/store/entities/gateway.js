import { createSlice } from "@reduxjs/toolkit";

import {
  DataObj,
  postedReducer,
  postFailedReducer,
  receivedReducer,
  requestedPostReducer,
  requestedReducer,
  requestFailedReducer,
} from "../htmlRequestReducers";

import {
  getDataActionCreator,
  loadDataActionCreator,
  postDataActionCreator,
  updateDataActionCreator,
} from "../htmlRequestActionCreators";

/**
 * api endpoints
 */
const API_ENDPOINT_GATEWAY_IDENTIFICATION = "/gateway/identification";
const API_ENDPOINT_GATEWAY_CONFIGURATION = "/gateway/configuration";
/**
 * Create Gateway Slice
 */
const slice = createSlice({
  name: "gateway",
  initialState: {
    ident: new DataObj(),
    config: new DataObj(),
  },
  reducers: {
    /* IDENTIFICATION */
    gatewayIdentRequested: new requestedReducer("gateway", "ident"),
    gatewayIdentReceived: new receivedReducer("gateway", "ident"),
    gatewayIdentRequestFailed: new requestFailedReducer("gateway", "ident"),
    /* CONFIG */
    gatewayConfigRequested: new requestedReducer("gateway", "config"),
    gatewayConfigReceived: new receivedReducer("gateway", "config"),
    gatewayConfigRequestFailed: new requestFailedReducer("gateway", "config"),
    gatewayConfigPostRequested: new requestedPostReducer("gateway", "config"),
    gatewayConfigPosted: new postedReducer("gateway", "config"),
    gatewayConfigPostFailed: new postFailedReducer("gateway", "config"),
    gatewayConfigUpdateRequested: new requestedReducer("gateway", "config"),
    gatewayConfigUpdated: new receivedReducer("gateway", "config"),
    gatewayConfigUpdateFailed: new requestFailedReducer("gateway", "config"),
  },
});

/* Export Gateway reducers */
export const {
  gatewayIdentRequested,
  gatewayIdentReceived,
  gatewayIdentRequestFailed,
  gatewayConfigRequested,
  gatewayConfigReceived,
  gatewayConfigRequestFailed,
  gatewayConfigPostRequested,
  gatewayConfigPosted,
  gatewayConfigPostFailed,
  gatewayConfigUpdateRequested,
  gatewayConfigUpdated,
  gatewayConfigUpdateFailed,
} = slice.actions;
export default slice.reducer;

/**
 * Action creators
 */

/**
 * loads gateway identification data from backend
 */
export const loadGatewayIdentification = new loadDataActionCreator(
  "Gatway identification",
  "gateway",
  "ident",
  API_ENDPOINT_GATEWAY_IDENTIFICATION,
  gatewayIdentRequested,
  gatewayIdentReceived,
  gatewayIdentRequestFailed
);

/**
 * loads gateway configuration data from backend
 */
export const loadGatewayConfiguration = new loadDataActionCreator(
  "Gateway configuration",
  "gateway",
  "config",
  API_ENDPOINT_GATEWAY_CONFIGURATION,
  gatewayConfigRequested,
  gatewayConfigReceived,
  gatewayConfigRequestFailed
);

/**
 * Changes the given gateway configuration on backend
 *
 * @param {object} config
 */
export const postGatewayConfig = new postDataActionCreator(
  "Gateway configuration",
  "gateway",
  "config",
  API_ENDPOINT_GATEWAY_CONFIGURATION,
  gatewayConfigPostRequested,
  gatewayConfigPosted,
  gatewayConfigPostFailed
);

/**
 * Updates the given gateway configuration in the store
 *
 * @param {object} config
 */
export const updateGatewayConfiguration = new updateDataActionCreator(
  "Gateway configuration",
  "gateway",
  "config",
  gatewayConfigUpdateRequested,
  gatewayConfigUpdated,
  gatewayConfigUpdateFailed
);

/* Memoization */

/**
 * serves the gateway identification data from store
 *
 * @returns gateway.ident
 */
export const getGatewayIdendificaton = new getDataActionCreator(
  "gateway",
  "ident"
);

/**
 * serves the gateway configuration data from store
 *
 * @returns gateway.config
 */
export const getGatewayConfiguration = new getDataActionCreator(
  "gateway",
  "config"
);
