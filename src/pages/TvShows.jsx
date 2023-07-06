import { Outlet, NavLink } from "react-router-dom";

const TvShows = () => {
 
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color : "#798485"
}
  return (
   
    <>
    <nav className="movies-nav">
   <NavLink to="/tv-shows"
   end
   style={({isActive})=> isActive ? activeStyle : null}
   >Airing Today</NavLink>
   <NavLink to="/tv-shows/on-the-air"
   end
   style={({isActive})=> isActive ? activeStyle : null}
   >On the air</NavLink>
    <NavLink to="/tv-shows/popular"
   end
   style={({isActive})=> isActive ? activeStyle : null}
   >Popular</NavLink>
    <NavLink to="/tv-shows/top-rated"
   end
   style={({isActive})=> isActive ? activeStyle : null}
   >Top Rated</NavLink>
  
   </nav>
   <Outlet/>
   </>
  );
};

export default TvShows;