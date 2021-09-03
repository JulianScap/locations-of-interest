import {
  SORT_LOCATIONS_REQUEST,
  SORT_LOCATIONS_FAILURE,
  SORT_LOCATIONS_SUCCESS,
} from "./actionTypes";
import {
  SortLocationsRequest,
  SortLocationsSuccess,
  SortLocationsSuccessPayload,
  SortLocationsFailure,
  SortLocationsFailurePayload,
} from "./types";

export const sortLocationsRequest = (property: string): SortLocationsRequest => ({
  type: SORT_LOCATIONS_REQUEST,
});

export const sortLocationsSuccess = (
  payload: SortLocationsSuccessPayload
): SortLocationsSuccess => ({
  type: SORT_LOCATIONS_SUCCESS,
  payload,
});

export const sortLocationsFailure = (
  payload: SortLocationsFailurePayload
): SortLocationsFailure => ({
  type: SORT_LOCATIONS_FAILURE,
  payload,
});
