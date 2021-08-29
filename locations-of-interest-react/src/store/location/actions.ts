import {
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_FAILURE,
  FETCH_LOCATION_SUCCESS,
} from "./actionTypes";
import {
  FetchLocationRequest,
  FetchLocationSuccess,
  FetchLocationSuccessPayload,
  FetchLocationFailure,
  FetchLocationFailurePayload,
} from "./types";

export const fetchLocationRequest = (): FetchLocationRequest => ({
  type: FETCH_LOCATION_REQUEST,
});

export const fetchLocationSuccess = (
  payload: FetchLocationSuccessPayload
): FetchLocationSuccess => ({
  type: FETCH_LOCATION_SUCCESS,
  payload,
});

export const fetchLocationFailure = (
  payload: FetchLocationFailurePayload
): FetchLocationFailure => ({
  type: FETCH_LOCATION_FAILURE,
  payload,
});
