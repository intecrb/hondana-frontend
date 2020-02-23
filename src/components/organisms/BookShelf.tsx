import React from "react";
import Book from "../atoms/Book";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";

interface IBook {
  id?: string;
  title?: string;
  imageUrl?: string;
  status?: string;
}

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

function BookShelf() {
  const classes = useStyles();
  const isOpen = useSelector((state: any) => state.isOpen);
  const books = useSelector((state: any) => state.books);
  const items = books.map((book: IBook) => (
    <div key={book.id} style={{ padding: "30px", display: "inline-block" }}>
      <Book img={book.imageUrl} title={book.title} status={book.status} />
    </div>
  ));
  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: isOpen
      })}
    >
      {items}
    </div>
  );
}

export default BookShelf;
