import { all, call, put, takeLatest } from "redux-saga/effects";
import { getLocationsOfInterest } from "../../features/locations-of-interest/locationsAPI";
import ILocation from "../../types/ILocation";
import { fetchLocationsFailure, fetchLocationsSuccess } from "./actions";
import { FETCH_LOCATIONS_REQUEST } from "./actionTypes";

function* fetchLocationsSaga() {
  try {
    const response: ILocation[] = yield call(getLocationsOfInterest);
    yield put(
      fetchLocationsSuccess({
        locations: response,
      })
    );
  } catch (e: any) {
    yield put(
      fetchLocationsFailure({
        error: e.message,
      })
    );
  }
}

function* locationsSaga() {
  yield all([takeLatest(FETCH_LOCATIONS_REQUEST, fetchLocationsSaga)]);
}

export default locationsSaga;
