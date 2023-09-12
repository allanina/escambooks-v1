import Book from "../../components/Book/Book";

function Home() {
  return (
    <div className="home">
      <div className="bookshelf-container">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}

export default Home;
