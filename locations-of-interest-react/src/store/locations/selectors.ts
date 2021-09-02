import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.locations.pending;

const getLocations = (state: AppState) => state.locations.locations;

const getError = (state: AppState) => state.locations.error;

export const getLocationsSelector = createSelector(getLocations, (locations) => locations);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
