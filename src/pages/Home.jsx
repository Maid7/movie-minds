import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import SearchBox from "../components/SearchBox";
const Home = () => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
  const { data } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=6dbc3f5c034c5335c9a3254a2271cfc0`
  );


  return (
    <div className="home"> 
          <SearchBox/>
      <div className="movies">
   
        {data &&
          data.results.map((movie) => (
            <div key={movie.id} className="card">
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={IMAGE_PATH + movie.poster_path}
                  className="card-image"
                />
              </Link>

              <p className="heading">{movie.title}</p>
              <p>{movie.original_language}</p>
              <p className="card-badge">{movie.vote_average}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;

