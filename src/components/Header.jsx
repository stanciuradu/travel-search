import React from "react";
import { Link } from "react-router-dom";
import "../components/Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Travels Search App</h1>
      <div className="button-navigation">
        <Link to="/">
          <button type="button" className="btn btn-warning">
            Home
          </button>
        </Link>
        <Link to="/about">
          <button type="button" className="btn btn-warning">
            About
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
