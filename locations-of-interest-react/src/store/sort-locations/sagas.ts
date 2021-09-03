import { all, call, put, takeLatest } from "redux-saga/effects";
import ILocation from "../../types/ILocation";
import { sortLocationsFailure, sortLocationsSuccess } from "./actions";
import { SORT_LOCATIONS_REQUEST } from "./actionTypes";
import { select } from "redux-saga/effects";
import { getLocationsSelector } from "../locations/selectors";
import ISort from "../../types/ISort";
import Sort from "../../tools/Sort";

function* sortLocationsSaga() {
  try {
    const sort: ISort = yield select(getLocationsSelector);
    const locations: ILocation[] = yield select(getLocationsSelector);
    Sort.locations(locations, sort);
    yield put(sortLocationsSuccess({}));
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
