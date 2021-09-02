import {
  SORT_LOCATIONS_REQUEST,
  SORT_LOCATIONS_SUCCESS,
  SORT_LOCATIONS_FAILURE,
} from "./actionTypes";

import { SortActions, SortState } from "./types";

const initialState: SortState = {
  pending: false,
  sort: {
    asc: true,
    property: "id"
  },
  error: null,
};

const reducer = (state = initialState, action: SortActions) => {
  switch (action.type) {
    case SORT_LOCATIONS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SORT_LOCATIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      };
    case SORT_LOCATIONS_FAILURE:
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
