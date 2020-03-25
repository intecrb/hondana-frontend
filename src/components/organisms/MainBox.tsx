import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import BookShelf from "./BookShelf";
import { Switch, Route } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { PrivateRoute } from "./PrivateRoute";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      paddingTop: 50,
      marginLeft: 0
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  })
);

function MainBox() {
  const classes = useStyles();
  const isOpen = useSelector((state: any) => state.isOpen);
  const css = clsx(classes.content, { [classes.contentShift]: isOpen });
  return (
    <div className={css}>
      <Switch>
        <PrivateRoute path="/books">
          <BookShelf />
        </PrivateRoute>

        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute path="/protected">
          <h3>Protected</h3>
        </PrivateRoute>

        <Route path="/">
          <div>root</div>
        </Route>
      </Switch>
    </div>
  );
}

export default MainBox;
