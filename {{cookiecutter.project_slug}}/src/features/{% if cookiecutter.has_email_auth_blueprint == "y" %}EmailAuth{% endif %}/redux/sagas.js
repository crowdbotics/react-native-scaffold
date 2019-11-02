import {all, takeLatest, put, call} from 'redux-saga/effects';
import * as NavigationService from '../../../navigator/NavigationService';

import {
  EMAIL_AUTH_LOGIN_REQUEST,
  EMAIL_AUTH_LOGIN_ERROR,
  EMAIL_AUTH_SIGNUP_REQUEST,
  EMAIL_AUTH_PASSWORD_RECOVER_REQUEST,
  EMAIL_AUTH_LOGIN_SUCCESS,
  EMAIL_AUTH_SIGNUP_ERROR,
  EMAIL_AUTH_SIGNUP_SUCCESS,
  EMAIL_AUTH_PASSWORD_RECOVER_SUCCESS,
  EMAIL_AUTH_PASSWORD_RECOVER_ERROR,
} from './constants';
import {request} from '../../../utils/http';

function sendLogin({email, password}) {
  return request.post('/api/v1/login/', {
    username: email,
    password,
  });
}

function sendSignUp({email, password}) {
  return request.post('/api/v1/signup/', {
    email,
    password,
  });
}

function sendPasswordRecovery(email) {
  //There is no reset password endpoint in backend, it's just a fake url
  return request.post('/api/v1/password-reset/', {
    email,
  });
}

function* handleLogin(action) {
  const {
    user: {email, password},
  } = action;
  try {
    const {status, data} = yield call(sendLogin, {email, password});

    if (status === 200) {
      yield put({
        type: EMAIL_AUTH_LOGIN_SUCCESS,
        accessToken: data.token,
      });

      // you can change the navigate for navigateAndResetStack to go to a protected route
      NavigationService.navigate('ProtectedRoute');
    } else {
      yield put({
        type: EMAIL_AUTH_LOGIN_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: EMAIL_AUTH_LOGIN_ERROR,
      error: "Can't sign in with provided credentials",
    });
  }
}

function* handleSignUp(action) {
  const {
    user: {email, password},
  } = action;
  try {
    const {status, data} = yield call(sendSignUp, {email, password});

    if (status === 201) {
      yield put({
        type: EMAIL_AUTH_SIGNUP_SUCCESS,
        user: data.user,
      });

      // you can change the navigate for navigateAndResetStack to go to a protected route
      NavigationService.navigate('ConfirmationRequired');
    } else {
      yield put({
        type: EMAIL_AUTH_SIGNUP_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: EMAIL_AUTH_SIGNUP_ERROR,
      error: "Can't sign up with provided credentials",
    });
  }
}

function* handlePasswordRecovery(action) {
  const {email} = action;

  try {
    const {status} = yield call(sendPasswordRecovery, email);

    if (status === 200) {
      yield put({
        type: EMAIL_AUTH_PASSWORD_RECOVER_SUCCESS,
        email,
      });

      // you can change the navigate for navigateAndResetStack to go to a protected route
      NavigationService.navigate('ConfirmationRequired');
    } else {
      yield put({
        type: EMAIL_AUTH_PASSWORD_RECOVER_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    yield put({
      type: EMAIL_AUTH_PASSWORD_RECOVER_ERROR,
      error: "Can't recover password with provided email",
    });
  }
}

export default all([
  takeLatest(EMAIL_AUTH_LOGIN_REQUEST, handleLogin),
  takeLatest(EMAIL_AUTH_SIGNUP_REQUEST, handleSignUp),
  takeLatest(EMAIL_AUTH_PASSWORD_RECOVER_REQUEST, handlePasswordRecovery),
]);
