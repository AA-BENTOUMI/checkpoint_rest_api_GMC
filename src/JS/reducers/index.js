import { combineReducers } from "redux";
import personsReducer from "./persons";

const rootReducer = combineReducers({ personsReducer });
export default rootReducer;
