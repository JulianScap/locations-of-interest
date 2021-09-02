import { all, call, put, takeLatest } from "redux-saga/effects";
import { getLocationsOfInterest } from "../../features/locations-of-interest/locationsAPI";
import ILocation from "../../types/ILocation";
import { fetchLocationsFailure, fetchLocationsSuccess } from "./actions";
import { FETCH_LOCATIONS_REQUEST } from "./actionTypes";

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
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

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* locationsSaga() {
  yield all([takeLatest(FETCH_LOCATIONS_REQUEST, fetchLocationsSaga)]);
}

export default locationsSaga;
