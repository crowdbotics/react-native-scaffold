import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */
{% if cookiecutter.has_email_auth_blueprint == "y" %}import { EmailAuthReducer } from "../features/EmailAuth/redux/reducers";{% endif %}

//@BlueprintReduxImportInsertion

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },
  {% if cookiecutter.has_email_auth_blueprint == "y" %}EmailAuth: EmailAuthReducer,{% endif %}

  //@BlueprintReduxCombineInsertion

});