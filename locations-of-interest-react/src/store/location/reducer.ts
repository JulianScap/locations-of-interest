import {
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_FAILURE,
} from "./actionTypes";

import { LocationActions, LocationState } from "./types";

const initialState: LocationState = {
  pending: false,
  locations: [],
  error: null,
};

const ok = (state = initialState, action: LocationActions) => {
  switch (action.type) {
    case FETCH_LOCATION_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        pending: false,
        locations: action.payload.locations,
        error: null,
      };
    case FETCH_LOCATION_FAILURE:
      return {
        ...state,
        pending: false,
        locations: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ok;