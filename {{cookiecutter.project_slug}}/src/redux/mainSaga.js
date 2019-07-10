import { all, takeEvery } from "redux-saga/effects";
{% if cookiecutter.has_login_blueprint %}import EmailAuthSaga from "../features/EmailAuth/redux/sagas";{% endif %}

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here
    {% if cookiecutter.has_login_blueprint %}EmailAuthSaga{% endif %}
  ]);
}
