import {
  IMenuStatusReducerAction,
  OPEN,
  CLOSE
} from "../actions/counterActions";

const isSideBarOpenReducer = (
  state = false,
  action: IMenuStatusReducerAction
) => {
  switch (action.type) {
    case OPEN:
      return true;
    case CLOSE:
      return false;
    default:
      return state;
  }
};

export default isSideBarOpenReducer;
