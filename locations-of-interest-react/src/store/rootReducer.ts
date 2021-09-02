import { combineReducers } from "redux";

import locationsReducer from "./locations/reducer";
import sortReducer from "./sort-locations/reducer";

const rootReducer = combineReducers({
  locations: locationsReducer,
  sort: sortReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
