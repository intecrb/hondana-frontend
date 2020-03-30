import { createStore } from "redux";
import { combineReducers } from "redux";
import isSideBarOpenReducer from "./reducers/isSideBarOpenReducer";
import booksReducer from "./reducers/booksReducer";
import authenticateReducer from "./reducers/authenticateReducer";

export const reducer = combineReducers({
  isOpen: isSideBarOpenReducer,
  books: booksReducer,
  isAuthenticated: authenticateReducer
});
export default createStore(reducer);

export interface IRootState {
  count: number;
}
