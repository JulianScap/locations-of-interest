import ILocation from "../../types/ILocation";
import {
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
} from "./actionTypes";

export interface LocationsState {
  pending: boolean;
  locations: ILocation[];
  error: string | null;
}

export interface FetchLocationsSuccessPayload {
  locations: ILocation[];
}

export interface FetchLocationsFailurePayload {
  error: string;
}

export interface FetchLocationsRequest {
  type: typeof FETCH_LOCATIONS_REQUEST;
}

export type FetchLocationsSuccess = {
  type: typeof FETCH_LOCATIONS_SUCCESS;
  payload: FetchLocationsSuccessPayload;
};

export type FetchLocationsFailure = {
  type: typeof FETCH_LOCATIONS_FAILURE;
  payload: FetchLocationsFailurePayload;
};

export type LocationsActions =
  | FetchLocationsRequest
  | FetchLocationsSuccess
  | FetchLocationsFailure;
