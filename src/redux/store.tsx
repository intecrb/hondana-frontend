import { createStore } from "redux";
import { combineReducers } from "redux";
import isSideBarOpenReducer from "./reducers/isSideBarOpenReducer";
import booksReducer from "./reducers/booksReducer";
export const reducer = combineReducers({
  isOpen: isSideBarOpenReducer,
  books: booksReducer
});
export default createStore(reducer);

export interface IRootState {
  count: number;
}
