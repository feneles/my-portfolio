import React from "react";
import { Icon } from "@iconify/react";
import bxDownArrowAlt from "@iconify/icons-bx/bx-down-arrow-alt";

function Header() {
  return (
    <div className="header">
      <div className="header_welcomeText">
        <h1 className="header_firstText">Hi, I'm Marek Rogala</h1>
        <h3 className="header_secondText">React Developer</h3>
      </div>

      <div className="header_iconContainer">
        <Icon
          className="arrow"
          icon={bxDownArrowAlt}
          style={{ color: "#fff", fontSize: "40px" }}
        />
      </div>

      <ul className="boxes">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Header;
