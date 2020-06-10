import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div>
      <h1>ShinyTracker</h1>
      <nav>
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
