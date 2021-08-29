import ILocation from "../../types/ILocation";
import {
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_FAILURE,
} from "./actionTypes";

export interface LocationState {
  pending: boolean;
  locations: ILocation[];
  error: string | null;
}

export interface FetchLocationSuccessPayload {
  locations: ILocation[];
}

export interface FetchLocationFailurePayload {
  error: string;
}

export interface FetchLocationRequest {
  type: typeof FETCH_LOCATION_REQUEST;
}

export type FetchLocationSuccess = {
  type: typeof FETCH_LOCATION_SUCCESS;
  payload: FetchLocationSuccessPayload;
};

export type FetchLocationFailure = {
  type: typeof FETCH_LOCATION_FAILURE;
  payload: FetchLocationFailurePayload;
};

export type LocationActions =
  | FetchLocationRequest
  | FetchLocationSuccess
  | FetchLocationFailure;
