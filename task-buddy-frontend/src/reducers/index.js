import { combineReducers } from "redux";
import { RESET_STORE } from "../constants";

import auth from "./auth";
import pages from "./pages";
import selectedPage from "./selectedPage";
import tasks from "./tasks";

const appReducer = combineReducers({ auth, pages, selectedPage, tasks });

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
