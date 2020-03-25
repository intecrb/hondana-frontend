import {
  IAuthenticateAction,
  AUTHENTICATE,
  SIGN_OUT
} from "../actions/authenticateAction";

const authenticateReducer = (state = false, action: IAuthenticateAction) => {
  switch (action.type) {
    case AUTHENTICATE:
      return true;
    case SIGN_OUT:
      return false;
    default:
      return state;
  }
};

export default authenticateReducer;
