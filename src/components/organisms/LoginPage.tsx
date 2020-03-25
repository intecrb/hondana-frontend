import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTHENTICATE } from "../../redux/actions/authenticateAction";

export function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { from }: any = history.location.state || { from: { pathname: "/" } };
  const login = () => {
    dispatch({ type: AUTHENTICATE });
    history.replace(from);
  };
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
