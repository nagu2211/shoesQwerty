import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>
          <span className="Q">Q</span>werty
        </h2>
      </div>
      <div className="icono-menu">
        <i className="fa-solid fa-bars" id="icono-menu"></i>
      </div>
      <ul className="menu active" id="menu">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/mostpopular">
            +Popular
          </Link>
        </li>
        <li>
          <Link to="/catalog">
          Catalog
          </Link>
        </li>
        <li>
          <Link to="/reviews">
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div>
        <span className="material-symbols-outlined iconNav">
          shopping_bag
        </span>
        <span className="material-symbols-rounded iconNav">person</span>
      </div>
    </nav>
  );
};

export default navbar;
