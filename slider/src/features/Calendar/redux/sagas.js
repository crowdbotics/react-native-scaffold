import { all, takeLatest, put, call, select } from "redux-saga/effects";
import { GoogleSignin, statusCodes } from "react-native-google-signin";
import moment from "moment";
import axios from "axios";

import * as NavigationService from "../../../navigator/NavigationService";
import * as constants from "./constants";
import { googleEventsToAgendaEvents } from "../helpers";

const getGoogleCalendarEvents = (date, accessToken) => {
  const timeMin = moment(date)
    .subtract(1, "month")
    .format("YYYY-MM-DDThh:mm:ss"); //2019-07-06T10:00:00Z

  const timeMax = moment(date)
    .add(1, "month")
    .format("YYYY-MM-DDThh:mm:ss");

  return axios({
    method: "GET",
    url: `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${timeMin}Z&timeMax=${timeMax}Z`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      Referer: "https://developers.google.com"
    }
  });
};

function* handleGoogleLogin() {
  try {
    yield call(GoogleSignin.hasPlayServices);
    const user = yield call(GoogleSignin.signIn);
    const { accessToken } = yield call(GoogleSignin.getTokens);

    yield put({
      type: constants.CALENDAR_GOOGLE_LOGIN_SUCCESS,
      user: { ...user, accessToken }
    });

    NavigationService.navigate("CalendarView");
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      yield put({
        type: constants.CALENDAR_GOOGLE_LOGIN_ERROR,
        error: "User canceled login flow"
      });
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
      yield put({
        type: constants.CALENDAR_GOOGLE_LOGIN_ERROR,
        error: "Sign in is in progress"
      });
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      yield put({
        type: constants.CALENDAR_GOOGLE_LOGIN_ERROR,
        error: "Google calendar is not available"
      });
    } else {
      // some other error happened
      console.log(error);
      yield put({
        type: constants.CALENDAR_GOOGLE_LOGIN_ERROR,
        error: "Unknon error in Calendar login"
      });
    }
  }
}

function* handleCalendarRequest() {
  try {
    const accessToken = yield select(state => state.Calendar.user.accessToken);

    // events from GoogleCalendat
    const {
      data: { items }
    } = yield call(getGoogleCalendarEvents, Date.now(), accessToken);

    const toDisplayEvents = googleEventsToAgendaEvents(items);

    yield put({
      type: constants.CALENDAR_DATA_SUCCESS,
      events: toDisplayEvents
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: constants.CALENDAR_DATA_ERROR,
      error: "Error while fetching the Google Calendar Events"
    });
  }
}

export default all([
  takeLatest(constants.CALENDAR_GOOGLE_LOGIN_REQUEST, handleGoogleLogin),
  takeLatest(constants.CALENDAR_DATA_REQUEST, handleCalendarRequest)
]);
