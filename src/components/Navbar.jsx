import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="navbar-logo"
        initial={{ y: -250 }}
        animate={{ y: -1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 90 }}
      >
        <Link to="/">MovieMinds</Link>
      </motion.div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/movies">Movies</Link>
        </button>
        <button>
          {" "}
          <Link to="/tv-shows">TV Shows</Link>
        </button>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span className="toggle-bar"></span>
        <motion.span className="toggle-bar"></motion.span>
        <span className="toggle-bar"></span>
      </div>
    </motion.nav>
  );
};

export default Navbar;
