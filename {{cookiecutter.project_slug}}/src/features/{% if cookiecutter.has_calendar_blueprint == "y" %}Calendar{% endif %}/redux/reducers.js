import * as actions from "./constants";

const initialState = {
  user: null,
  errors: { CalendarLogin: null },
  events: {}
};

export const CalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CALENDAR_GOOGLE_LOGIN_SUCCESS:
      return { ...state, user: action.user };
    case actions.CALENDAR_GOOGLE_LOGIN_ERROR:
      return { ...state, errors: { CalendarLogin: action.error } };
    case actions.CALENDAR_DATA_SUCCESS:
      return { ...state, events: action.events };
    case actions.CALENDAR_DATA_ERROR:
      return { ...state, errors: { CalendarLogin: action.error } };
    default:
      return state;
  }
};
