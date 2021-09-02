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

export const fetchLocationsRequest = (): SortLocationsRequest => ({
  type: SORT_LOCATIONS_REQUEST,
});

export const fetchLocationsSuccess = (
  payload: SortLocationsSuccessPayload
): SortLocationsSuccess => ({
  type: SORT_LOCATIONS_SUCCESS,
  payload,
});

export const fetchLocationsFailure = (
  payload: SortLocationsFailurePayload
): SortLocationsFailure => ({
  type: SORT_LOCATIONS_FAILURE,
  payload,
});
