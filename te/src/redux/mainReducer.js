import { combineReducers } from "redux";
import EmailAuthReducer from "../../EmailAuth/redux/reducer";

/**
 * You can import more reducers here
 */

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },
  EmailAuth: EmailAuthReducer
});
