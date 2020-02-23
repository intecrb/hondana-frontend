import React from "react";
import BookShelf from "./components/organisms/BookShelf";
import Header from "./components/organisms/Header";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
// import IsbnScanner from "./organisms/IsbnScanner";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    }
  })
);
const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <BookShelf />
      {/* <IsbnScanner /> */}
    </div>
  );
};

export default App;
