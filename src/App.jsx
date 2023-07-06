import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";

import MovieDetails from "./Movies/MovieDetails";
import PopularMovies from "./Movies/PopularMovies";
import UpcomingMovies from "./Movies/UpcomingMovies";
import TopRatedMovies from "./Movies/TopRatedMovies";
import NowPlayingMovies from "./Movies/NowPlayingMovies";


// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AiringToday from "./TvShows/AiringToday";
import OnTheAir from "./TvShows/OnTheAir";
import TvShowsDetails from "./TvShows/TvShowsDetails";
import PopularTvShows from "./TvShows/PopularTvShows";
import TopRatedTvShows from "./TvShows/TopRatedTvShows";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Footer />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
        
         
         {/* movies category path */}
         <Route path="movies" element={<Movies/>}>
         <Route index element={<PopularMovies/>} />
         <Route path="upcoming" element={<UpcomingMovies />} />
         <Route path="top-rated" element={< TopRatedMovies/>} />
         <Route path="now-playing" element={< NowPlayingMovies/>} />
         <Route path=":id" element={<MovieDetails />} />
         </Route>

          {/* tv shows category path */}
          <Route path="tv-shows" element={<TvShows/>}>
         <Route index element={<AiringToday/>}   />
         <Route path="on-the-air" element={< OnTheAir/>} />
         <Route path="popular" element={< PopularTvShows/>}/>
         <Route path="top-rated" element={< TopRatedTvShows/>}/>
         <Route path=":id" element={<TvShowsDetails/>}></Route>
         </Route>
         
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
