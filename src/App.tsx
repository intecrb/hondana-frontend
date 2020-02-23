import React from "react";
import BookShelf from "./components/organisms/BookShelf";
import Header from "./components/organisms/Header";
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
