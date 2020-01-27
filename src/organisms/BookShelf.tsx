import React from "react";
import Book from "../atoms/Book";
import fetchBooks from "../action/fetchBooksMock";

interface IBook {
  id?: string;
  title?: string;
  imageUrl?: string;
  status?: string;
}

interface IProps {}

interface IState {
  books: IBook[];
}

class BookShelf extends React.Component<IProps, IState> {
  _isMounted = false;

  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      books: []
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    const books = await fetchBooks();
    if (this._isMounted) {
      this.setState({
        books: books
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const items = this.state.books.map((book: IBook) => (
      <div key={book.id} style={{ padding: "30px", display: "inline-block" }}>
        <Book img={book.imageUrl} title={book.title} status={book.status} />
      </div>
    ));
    return <div>{items}</div>;
  }
}

export default BookShelf;
