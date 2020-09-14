import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-md">
      <p className="navbar-brand my-auto">Marek Rogala</p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target=".navbar_menu"
        aria-controls="navbar_menu"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar_menu collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item mx-4 my-2">
            <Link
              to="header"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li className="nav-item mx-4 my-2">
            <Link
              activeClass="active"
              spy={true}
              to="projects"
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item mx-4 my-2">
            <Link
              activeClass="active"
              spy={true}
              to="about"
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className="nav-item mx-4 my-2">
            <Link
              activeClass="active"
              spy={true}
              to="contact"
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
