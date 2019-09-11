import { all, takeEvery, take } from "redux-saga/effects";
import EmailAuthSaga from "../features/EmailAuth/redux/sagas";
import CalendarSaga from "../features/Calendar/redux/sagas";

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here
    EmailAuthSaga,
    CalendarSaga,
  ]);
}