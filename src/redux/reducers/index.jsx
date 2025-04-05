import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";

export const rootReducer= combineReducers({counter: CounterReducer});
