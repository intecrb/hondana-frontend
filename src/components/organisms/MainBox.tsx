import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import BookShelf from "./BookShelf";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <Router>
      <div className={css}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/books">
            <BookShelf />
          </Route>
          <Route path="/">
            <div>Nothing</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MainBox;
