import { combineReducers } from "redux";
import { EmailAuthReducer } from "../features/EmailAuth/redux/reducers";
import { CalendarReducer } from "../features/Calendar/redux/reducers";

/**
 * You can import more reducers here
 */

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },
  EmailAuth: EmailAuthReducer,
  Calendar: CalendarReducer,
});
