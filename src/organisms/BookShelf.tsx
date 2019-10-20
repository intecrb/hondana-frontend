import React from "react";
import Book from "../atoms/Book";

interface IBook {
  id: string;
  title: string;
  image: string;
  status: string;
}

interface State {
  books: IBook[];
}

// TODO: APIで本の一覧を取得する
class BookShelf extends React.Component<State> {
  /**
   * APIでBooksの一覧を取得する
   */
  fetchBooks = async () => {
    // try {
    //   const response = await fetch("http://localhost:3333");
    //   this.setState({
    //     books: await response.json()
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
    this.setState({
      books: [
        {
          id: "123456789",
          title: "web api the good parts",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51GHwTNJgSL._SX389_BO1,204,203,200_.jpg",
          status: "貸出中"
        },
        {
          id: "vcd67uiklp098uyh",
          title: "デザインパターン",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51QsmvkObML._SX392_BO1,204,203,200_.jpg"
        },
        {
          id: "nfrtyu87tghnhji",
          title: "WebDBPress",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51Y3LfVnduL._SX352_BO1,204,203,200_.jpg"
        }
      ]
    });
  };

  componentDidMount() {
    return this.fetchBooks();
  }

  state = {
    books: []
  };

  render() {
    const items = this.state.books.map(d => (
      <div style={{ padding: "30px", display: "inline-block" }}>
        <Book img={d.image} title={d.title} status={d.status} />
      </div>
    ));
    return <div>{items}</div>;
  }
}

export default BookShelf;
