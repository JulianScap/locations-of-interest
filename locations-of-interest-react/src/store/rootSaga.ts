import { all, fork } from "redux-saga/effects";

import locationSaga from "./location/sagas";

export function* rootSaga() {
  yield all([fork(locationSaga)]);
}
