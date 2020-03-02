import React from "react";
import MainBox from "./components/organisms/MainBox";
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
      <MainBox />
      {/* <IsbnScanner /> */}
    </div>
  );
};

export default App;
