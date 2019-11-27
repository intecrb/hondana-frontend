const fetchBooks = async () => {
  return [
    {
      id: "123456789",
      title: "web api the good parts",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51GHwTNJgSL._SX389_BO1,204,203,200_.jpg",
      status: "貸出中"
    },
    {
      id: "vcd67uiklp098uyh",
      title: "デザインパターン",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51QsmvkObML._SX392_BO1,204,203,200_.jpg"
    },
    {
      id: "nfrtyu87tghnhji",
      title: "WebDBPress",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51Y3LfVnduL._SX352_BO1,204,203,200_.jpg"
    }
  ];
};

export default fetchBooks;
