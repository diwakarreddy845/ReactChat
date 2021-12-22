// reducers.js
import { combineReducers } from "redux";

export const geod = (state = {}, action) => {
  switch (action.type) {
    case "ACTIVATE_GEOD":
      return action.geod;
    case "CLOSE_GEOD":
      return {};
    case "NAME_CHANGE":
      return action.name;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  geod,
});
