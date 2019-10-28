import * as actions from "./constants";

export const googleSignIn = _ => ({
  type: actions.CALENDAR_GOOGLE_LOGIN_REQUEST
});

export const getEventsFromGoogleCalendar = _ => ({
  type: actions.CALENDAR_DATA_REQUEST
});
