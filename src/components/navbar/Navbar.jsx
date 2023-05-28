import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

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
          <Link to="home" smooth={true} spy={true} isDynamic={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="mostPopular" smooth={true} spy={true} isDynamic={true}>
            +Popular
          </Link>
        </li>
        <li>
          Catalogo
        </li>
        <li>
          <Link to="reviews" smooth={true} spy={true} isDynamic={true}>
            Reviews
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} spy={true} isDynamic={true}>
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
