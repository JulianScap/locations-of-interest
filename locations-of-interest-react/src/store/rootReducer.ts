import { combineReducers } from "redux";

import locationReducer from "./location/reducer";

const rootReducer = combineReducers({
  location: locationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;