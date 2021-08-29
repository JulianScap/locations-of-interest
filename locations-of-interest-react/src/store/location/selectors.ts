import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.location.pending;

const getLocations = (state: AppState) => state.location.locations;

const getError = (state: AppState) => state.location.error;

export const getLocationsSelector = createSelector(getLocations, (todos) => todos);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);