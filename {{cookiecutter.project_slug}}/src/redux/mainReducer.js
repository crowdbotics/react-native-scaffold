import { combineReducers } from "redux";
{% if cookiecutter.has_login_blueprint %}import { EmailAuthReducer } from "../features/EmailAuth/redux/reducers";{% endif %}
{% if cookiecutter.has_calendar_blueprint == "y" %}import { CalendarReducer } from "../features/Calendar/redux/reducers";{% endif %}

/**
 * You can import more reducers here
 */

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },
  {% if cookiecutter.has_login_blueprint %}EmailAuth: EmailAuthReducer,{% endif %}
  {% if cookiecutter.has_calendar_blueprint == "y" %}Calendar: CalendarReducer,{% endif %}
});
