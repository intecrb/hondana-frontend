import React from "react";
import Book from "../atoms/Book";
import { useSelector } from "react-redux";

interface IBook {
  id?: string;
  title?: string;
  imageUrl?: string;
  status?: string;
}

function BookShelf() {
  const books = useSelector((state: any) => state.books);
  const items = books.map((book: IBook) => (
    <div key={book.id} style={{ padding: "30px", display: "inline-block" }}>
      <Book img={book.imageUrl} title={book.title} status={book.status} />
    </div>
  ));
  return <>{items}</>;
}

export default BookShelf;
