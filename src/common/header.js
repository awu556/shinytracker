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

        <h3 href="#">My Account</h3>
        <h3 href="#">Pokedex</h3>
        <h3 href="#">Help</h3>
      </nav>
    </div>
  );
};

export default header;
