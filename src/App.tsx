import React from "react";
import BookShelf from "./organisms/BookShelf";
import IsbnScanner from "./organisms/IsbnScanner";

const App: React.FC = () => {
  return (
    <div>
      <BookShelf />
      <IsbnScanner />
    </div>
  );
};

export default App;
