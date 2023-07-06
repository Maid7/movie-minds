import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const MovieDetails = () => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
  const { id } = useParams();
  const { data: movie } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=6dbc3f5c034c5335c9a3254a2271cfc0`
  );
 

  return (
    <div className="movie-banner">
      {movie && (
        <>
          <div className="backdrop-path">
            <img
              src={IMAGE_PATH + movie.backdrop_path}
              className="backdrop-path-img"
            />
          </div>
          <div className="banner-container">
            <div className="title-container">
              {/* title-top */}
              <div className="title-top">
                <div className="movie-title">
                  <h1>{movie.title}</h1>
                </div>
                <div className="more-about-movie">
                  <span className="runtime">{movie.runtime}min</span>

                  <span className="rating">{movie.vote_average}</span>
                </div>
              </div>
              {/* title-bottom */}
              <div className="title-bottom">
                {/* category */}
                <div className="category">
                  {movie.genres.map((genre, index) => {
                    return <strong key={index}>{genre.name}</strong>;
                  })}
                </div>
                <div className="description">
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
