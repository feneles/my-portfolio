import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar navbar-dark">
      <p className="navbar-brand my-auto">Marek Rogala</p>

      <ul className="navbar-nav ">
        <li className="nav-item my-2">
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
        <li className="nav-item my-2">
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
        <li className="nav-item my-2">
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
        <li className="nav-item my-2">
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
    </nav>
  );
}

export default Navbar;
