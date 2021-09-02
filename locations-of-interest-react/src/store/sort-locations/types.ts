import ISort from "../../types/ISort";
import {
  SORT_LOCATIONS_REQUEST,
  SORT_LOCATIONS_SUCCESS,
  SORT_LOCATIONS_FAILURE,
} from "./actionTypes";

export interface SortState {
  pending: boolean;
  sort: ISort;
  error: string | null;
}

export interface SortLocationsSuccessPayload {
  // Nothing
}

export interface SortLocationsFailurePayload {
  error: string;
}

export interface SortLocationsRequest {
  type: typeof SORT_LOCATIONS_REQUEST;
}

export type SortLocationsSuccess = {
  type: typeof SORT_LOCATIONS_SUCCESS;
  payload: SortLocationsSuccessPayload;
};

export type SortLocationsFailure = {
  type: typeof SORT_LOCATIONS_FAILURE;
  payload: SortLocationsFailurePayload;
};

export type LocationsActions =
  | SortLocationsRequest
  | SortLocationsSuccess
  | SortLocationsFailure;
