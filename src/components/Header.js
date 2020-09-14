import React, { useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import bxDownArrowAlt from "@iconify/icons-bx/bx-down-arrow-alt";
import { Link } from "react-scroll";
import gsap from "gsap";

function Header() {
  let text = useRef(null);

  useEffect(() => {
    const first = text.firstElementChild;
    const second = text.lastElementChild;

    gsap.set([first, second], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(
      first,
      { x: "-=100" },
      { duration: 1, x: "+=100", autoAlpha: 1 }
    ).fromTo(second, { x: "+=100" }, { duration: 1, x: "-=100", autoAlpha: 1 });
  });

  return (
    <div className="header" id="header">
      <div className="header_welcomeText" ref={(el) => (text = el)}>
        <h1 className="header_firstText">Hi, I'm Marek Rogala</h1>
        <h3 className="header_secondText">React Developer</h3>
      </div>

      <div className="header_iconContainer">
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Icon
            className="arrow"
            icon={bxDownArrowAlt}
            style={{ color: "#fff", fontSize: "40px" }}
          />
        </Link>
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
