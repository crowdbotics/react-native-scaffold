import { all, takeEvery, take } from "redux-saga/effects";
{% if cookiecutter.has_email_auth_blueprint == "y" %}import EmailAuthSaga from "../features/EmailAuth/redux/sagas";{% endif %}
{% if cookiecutter.has_calendar_blueprint == "y" %}import CalendarSaga from "../features/Calendar/redux/sagas";{% endif %}

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here
    {% if cookiecutter.has_email_auth_blueprint == "y" %}EmailAuthSaga,{% endif %}
    {% if cookiecutter.has_calendar_blueprint == "y" %}CalendarSaga,{% endif %}
  ]);
}