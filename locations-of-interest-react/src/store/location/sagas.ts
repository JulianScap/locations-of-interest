import { all, call, put, takeLatest } from "redux-saga/effects";
import { getLocationsOfInterest } from "../../features/locations-of-interest/locationsAPI";
import ILocation from "../../types/ILocation";
import { fetchLocationFailure, fetchLocationSuccess } from "./actions";
import { FETCH_LOCATION_REQUEST } from "./actionTypes";

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchLocationsSaga() {
  try {
    const response: ILocation[] = yield call(getLocationsOfInterest);
    yield put(
      fetchLocationSuccess({
        locations: response,
      })
    );
  } catch (e) {
    yield put(
      fetchLocationFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* locationSaga() {
  yield all([takeLatest(FETCH_LOCATION_REQUEST, fetchLocationsSaga)]);
}

export default locationSaga;
