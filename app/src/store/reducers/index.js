import { combineReducers } from "redux";
import { quotesReducer as quotes } from "./quotesReducer.js";

export default combineReducers({
  quotes,
});
