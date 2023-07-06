import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
     
        <p>&copy; 2023 MovieMinds</p>
        <ul className="footer-links">
          <li>
            <button>
              {" "}
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/movies">Movies</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/tv-shows">TV Shows</Link>
            </button>
          </li>
        </ul>
     
    </footer>
  );
};

export default Footer;
