import React from "react";
import clsx from "clsx";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import { HomeIcon } from "../atoms/HomeIcon";
import MenuIcon from "@material-ui/icons/Menu";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { OPEN } from "../../redux/actions/counterActions";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

export default function HeaderBar() {
  const classes = useStyles();
  const isOpen = useSelector((state: any) => state.isOpen);
  const dispatch = useDispatch();
  const open = () => {
    dispatch({ type: OPEN });
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpen
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => {
            open();
          }}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: isOpen
          })}
        >
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <HomeIcon style={{ color: "white" }} />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
