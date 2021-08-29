import { combineReducers } from "redux";

import locationsReducer from "./locations/reducer";

const rootReducer = combineReducers({
  locations: locationsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;