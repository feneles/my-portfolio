import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import worldLine from "@iconify/icons-clarity/world-line";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Main() {
  let projectText = useRef(null);

  useEffect(() => {
    const project = projectText.firstElementChild;
    gsap.fromTo(
      project,
      { y: "+=100", opacity: 0 },
      { y: 0, opacity: 1, duration: 1, scrollTrigger: project }
    );
  });

  return (
    <div className="main" id="projects" ref={(el) => (projectText = el)}>
      <h2 className="main_topText">
        <span>{"<"}</span>projects
        <span>{">"}</span>
      </h2>
      <div projects="main_projectsContainer">
        <div className="main_firstProject">
          <div className="card_">
            <div className="card_content">
              <div className="card_front first_project">
                <p className="card_title">Online shop template</p>
              </div>
              <div className="card_back">
                <a
                  href="https://github.com/feneles/e-commerce-shop"
                  target="_blank"
                >
                  <img
                    className="card_github"
                    src="/images/github.png"
                    alt="github img"
                  />
                </a>
                <a
                  href="https://e-commerce-store-1fa53.web.app/"
                  target="_blank"
                >
                  <Icon
                    className="card_liveIcon"
                    icon={worldLine}
                    style={{ color: "#fff", fontSize: "70px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main_secondProject">
          <div className="card_">
            <div className="card_content">
              <div className="card_front second_project">
                <h3 className="card_title">Path of Exile</h3>
                <p className="card_subtitle">profile browser</p>
              </div>
              <div className="card_back">
                <a href="https://github.com/feneles/poe_app" target="_blank">
                  <img
                    className="card_github"
                    src="/images/github.png"
                    alt="github img"
                  />
                </a>
                <a href="https://poeapp-9beb2.web.app/" target="_blank">
                  <Icon
                    className="card_liveIcon"
                    icon={worldLine}
                    style={{ color: "#fff", fontSize: "70px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main_thirdProject">
          <div className="card_">
            <div className="card_content">
              <div className="card_front third_project">
                <h3 className="card_title">Amazon Clone</h3>
              </div>
              <div className="card_back">
                <a
                  href="https://github.com/feneles/amazon-clone"
                  target="_blank"
                >
                  <img
                    className="card_github"
                    src="/images/github.png"
                    alt="github img"
                  />
                </a>
                <a href="https://clone-57744.web.app" target="_blank">
                  <Icon
                    className="card_liveIcon"
                    icon={worldLine}
                    style={{ color: "#fff", fontSize: "70px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
