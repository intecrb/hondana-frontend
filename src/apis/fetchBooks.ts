const fetchBooks = async () => {
  const response = await fetch("http://localhost:3333/books");
  return await response.json();
};

export default fetchBooks;
