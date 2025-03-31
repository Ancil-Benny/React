import Card from "../components/card"
function Home() {
  const movies = [
    { id: "1", title: "halo", release_date: "2023" },
    { id: "2", title: "arrow", release_date: "2021" },
    { id: "3", title: "mars", release_date: "2023" },
  ];
  return (
    <div className="home">
      <div className="movie-grid">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
