import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const TvShowsDetails = () => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
  const { id } = useParams();
  const { data: tv } = useFetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=6dbc3f5c034c5335c9a3254a2271cfc0`
  );
  console.log(tv);

  return (
    <div className="movie-banner">
      {tv && (
        <>
          <div className="backdrop-path">
            <img
              src={IMAGE_PATH + tv.backdrop_path}
              className="backdrop-path-img"
            />
          </div>
          <div className="banner-container">
            <div className="title-container">
              {/* title-top */}
              <div className="title-top">
                <div className="movie-title">
                  <h1>{tv.name}</h1>
                </div>
                <div className="more-about-movie">
                  <span className="runtime">{tv.runtime}min</span>

                  <span className="rating">{tv.vote_average}</span>
                </div>
              </div>
              {/* title-bottom */}
              <div className="title-bottom">
                {/* category */}
                <div className="category">
                  {tv.genres.map((genre, index) => {
                    return <strong key={index}>{genre.name}</strong>;
                  })}
                </div>
                <div className="description">
                  <p>{tv.original_language}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TvShowsDetails;
