import React from "react";
import BookShelf from "./organisms/BookShelf";
import Header from "./organisms/Header";
// import IsbnScanner from "./organisms/IsbnScanner";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <BookShelf />
      {/* <IsbnScanner /> */}
    </div>
  );
};

export default App;
