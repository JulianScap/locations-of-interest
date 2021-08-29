import { all, fork } from "redux-saga/effects";

import locationSaga from "./locations/sagas";

export function* rootSaga() {
  yield all([fork(locationSaga)]);
}
