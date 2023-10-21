import { combineReducers } from "redux";
import userReducer from "./reducer/user";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
});



export default store;
