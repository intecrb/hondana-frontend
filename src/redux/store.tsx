import { createStore } from "redux";
import { combineReducers } from "redux";
import isSideBarOpenReducer from "./reducers/isSideBarOpenReducer";
export const reducer = combineReducers({ isOpen: isSideBarOpenReducer });
export default createStore(reducer);

export interface IRootState {
  count: number;
}
