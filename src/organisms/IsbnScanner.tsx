import React from "react";
var isbn = require("node-isbn");

interface IProps {}

interface IState {
  isbn: any;
  authors: string[];
  canonicalVolumeLink: string;
  contentVersion: string;
  description: string;
  infoLink: string;
  language: string;
  pageCount: number;
  previewLink: string;
  printType: string;
  publishedDate: string;
  subtitle: string;
  title: string;
}

interface IIsbnResolve {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: [
    {
      type: string;
      identifier: string;
    }
  ];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  contentVersion: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

class IsbnScanner extends React.Component<IProps, IState> {
  fetchIsbnInfo = async () => {
    try {
      const b = (await isbn.resolve(this.state.isbn)) as IIsbnResolve;
      console.log(b);
      this.setState({
        authors: b.authors,
        canonicalVolumeLink: b.canonicalVolumeLink,
        contentVersion: b.contentVersion,
        description: b.description,
        infoLink: b.infoLink,
        language: b.language,
        pageCount: b.pageCount,
        previewLink: b.previewLink,
        printType: b.printType,
        publishedDate: b.publishedDate,
        title: b.title
      });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    return this.fetchIsbnInfo();
  }

  state = {
    isbn: 9784873118567,
    authors: [],
    canonicalVolumeLink: "",
    contentVersion: "",
    description: "",
    infoLink: "",
    language: "",
    pageCount: 0,
    previewLink: "",
    printType: "",
    publishedDate: "",
    subtitle: "",
    title: ""
  };

  handleChange = (event: { target: { value: any } }) => {
    this.setState({ isbn: event.target.value });
    this.fetchIsbnInfo(); // 入力されてすぐにAPI投げるのはちょっと・・・
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            ISBN CODE:{" "}
            <input
              type="text"
              name="name"
              value={this.state.isbn}
              onChange={this.handleChange}
            />
          </li>
          <li>{this.state.authors}</li>
          <li>{this.state.canonicalVolumeLink}</li>
          <li>{this.state.contentVersion}</li>
          <li>{this.state.description}</li>
          <li>{this.state.infoLink}</li>
          <li>{this.state.language}</li>
          <li>{this.state.pageCount}</li>
          <li>{this.state.previewLink}</li>
          <li>{this.state.printType}</li>
          <li>{this.state.publishedDate}</li>
          <li>{this.state.title}</li>
        </ul>
      </div>
    );
  }
}

export default IsbnScanner;
