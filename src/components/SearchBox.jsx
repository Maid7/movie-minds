import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
  const [searchedData, setSearchedData] = useState();

  const getMovieBySearch = async (search_term) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6dbc3f5c034c5335c9a3254a2271cfc0&query=${search_term}`
    );
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setSearchedData(data);
    }
    return data.results;
  };

  console.log(searchedData);

  return (
    <>
      {/* search box */}
      <div className="input-group">
        <input
          className="input"
          type="text"
          onChange={(e) => {
            e.preventDefault();
            getMovieBySearch(e.target.value);
          }}
        />
        <label className="user-label">Search Movie...</label>
      </div>
      {/* searched movies list */}
      <div className="movies">
        {searchedData &&
          searchedData.results.map((movie) => (
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
    </>
  );
};

export default SearchBox;
