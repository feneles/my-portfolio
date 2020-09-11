import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-md">
      <p className="navbar-brand">Marek Rogala</p>
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
          <li className="nav-item mx-4 my-2">Home</li>
          <li className="nav-item mx-4 my-2">Projects</li>
          <li className="nav-item mx-4 my-2">Skills</li>
          <li className="nav-item mx-4 my-2">About</li>
          <li className="nav-item mx-4 my-2">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
