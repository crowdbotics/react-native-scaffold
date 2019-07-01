import { combineReducers } from "redux";
/**
 * You can import more reducers here
 */

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  }
});
