import { all, call, put, takeLatest } from "redux-saga/effects";
import { getLocationsOfInterest } from "../../features/locations-of-interest/locationsAPI";
import ILocation from "../../types/ILocation";
import { sortLocationsFailure, sortLocationsSuccess } from "./actions";
import { SORT_LOCATIONS_REQUEST } from "./actionTypes";

function* sortLocationsSaga() {
  try {
    const response: ILocation[] = yield call(getLocationsOfInterest);
    yield put(
      sortLocationsSuccess({
        locations: response,
      })
    );
  } catch (e: any) {
    yield put(
      sortLocationsFailure({
        error: e.message,
      })
    );
  }
}

function* locationsSaga() {
  yield all([takeLatest(SORT_LOCATIONS_REQUEST, sortLocationsSaga)]);
}

export default locationsSaga;
