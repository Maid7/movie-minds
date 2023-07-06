import { Link } from "react-router-dom";
import useFetch from "../useFetch";
const OnTheAir = () => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

  const { data } = useFetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=6dbc3f5c034c5335c9a3254a2271cfc0`
  );

  console.log(data)
  return (


    <div>
      <div className="movies">
       
        {data &&
          data.results.map((tv) => (
            <div key={tv.id} class="card">
              <Link to={`/tv-shows/${tv.id}`}>
                <img
                  src={IMAGE_PATH + tv.poster_path}
                  className="card-image"
                />
              </Link>

              <p className="heading">{tv.name}</p>
              <p>{tv.original_language}</p>
              <p className="card-badge">{tv.vote_average}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OnTheAir;
