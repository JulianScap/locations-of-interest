import {
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
} from "./actionTypes";
import {
  FetchLocationsRequest,
  FetchLocationsSuccess,
  FetchLocationsSuccessPayload,
  FetchLocationsFailure,
  FetchLocationsFailurePayload,
} from "./types";

export const fetchLocationsRequest = (): FetchLocationsRequest => ({
  type: FETCH_LOCATIONS_REQUEST,
});

export const fetchLocationsSuccess = (
  payload: FetchLocationsSuccessPayload
): FetchLocationsSuccess => ({
  type: FETCH_LOCATIONS_SUCCESS,
  payload,
});

export const fetchLocationsFailure = (
  payload: FetchLocationsFailurePayload
): FetchLocationsFailure => ({
  type: FETCH_LOCATIONS_FAILURE,
  payload,
});
