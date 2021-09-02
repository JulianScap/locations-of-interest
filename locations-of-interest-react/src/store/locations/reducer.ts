import {
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
} from "./actionTypes";

import { LocationsActions, LocationsState } from "./types";

const initialState: LocationsState = {
  pending: false,
  locations: [],
  error: null,
};

const reducer = (state = initialState, action: LocationsActions) => {
  switch (action.type) {
    case FETCH_LOCATIONS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        locations: action.payload.locations,
        error: null,
      };
    case FETCH_LOCATIONS_FAILURE:
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

export default reducer;
