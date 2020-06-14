import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header-div">
      <h1>ShinyTracker</h1>
      <nav className="nav-links">
        <Link to="/landingpage">
          <h3>Home</h3>
        </Link>
        <Link to="#">
          <h3>My Account</h3>
        </Link>
        <Link to="/pokedex">
          <h3>Pokedex</h3>
        </Link>
        <Link to="#">
          <h3>Help</h3>
        </Link>
      </nav>
    </div>
  );
};

export default header;
