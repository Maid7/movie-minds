import { Outlet, NavLink } from "react-router-dom";

const Movies = () => {
 
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color : "#798485"
}
  return (
   
    <>
    <nav className="movies-nav">
   <NavLink to="/movies"
   end
   style={({isActive})=> isActive ? activeStyle : null}
   >Popular Movies</NavLink>
   <NavLink to="/movies/upcoming"
   end
   style={({isActive})=> isActive ? activeStyle : null}
   >Upcoming</NavLink>
    <NavLink to="/movies/top-rated"
   end
   style={({isActive})=> isActive ? activeStyle : null}
   >Top Rated</NavLink>
    <NavLink to="/movies/now-playing"
   end
   style={({isActive})=> isActive ? activeStyle : null}
   >Now Playing</NavLink>
  
   </nav>
   <Outlet/>
   </>
  );
};

export default Movies;
