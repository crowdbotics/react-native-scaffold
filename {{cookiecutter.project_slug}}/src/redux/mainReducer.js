import { combineReducers } from "redux";
{% if cookiecutter.has_login_blueprint == "True"%}import { EmailAuthReducer } from "../features/EmailAuth/redux/reducers";{% endif %}

/**
 * You can import more reducers here
 */

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },
  {% if cookiecutter.has_login_blueprint == "True" %}EmailAuth: EmailAuthReducer{% endif %}
});
