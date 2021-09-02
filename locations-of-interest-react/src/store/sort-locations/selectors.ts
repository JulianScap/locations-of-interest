import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.sort.pending;

const getSort = (state: AppState) => state.sort.sort;

const getError = (state: AppState) => state.sort.error;

export const getSortSelector = createSelector(getSort, (sort) => sort);

export const getSortPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
