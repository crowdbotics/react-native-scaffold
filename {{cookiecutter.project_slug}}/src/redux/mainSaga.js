import { all, takeEvery, take } from "redux-saga/effects";
{% if cookiecutter.has_email_auth_blueprint == "y" %}import EmailAuthSaga from "../features/EmailAuth/redux/sagas";{% endif %}

//@BlueprintReduxSagaImportInsertion

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here
    {% if cookiecutter.has_email_auth_blueprint == "y" %}EmailAuthSaga,{% endif %}

    //@BlueprintReduxSagaMainInsertion
    
  ]);
}