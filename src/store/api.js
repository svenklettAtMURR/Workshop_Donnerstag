import { createAction } from "@reduxjs/toolkit";

/**
 * Actions
 */
export const apiCallBegan = createAction("api/callBegan");
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallFailed = createAction("api/callFailed");
