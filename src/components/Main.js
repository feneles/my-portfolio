import React from "react";
import { Icon } from "@iconify/react";
import worldLine from "@iconify/icons-clarity/world-line";
function Main() {
  return (
    <div className="main" id="projects">
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
                <a href="https://github.com/feneles/e-commerce-shop">
                  <img
                    className="card_github"
                    src="/images/github.png"
                    alt="github img"
                  />
                </a>
                <a href="https://e-commerce-store-1fa53.web.app/">
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
                <a href="https://github.com/feneles/poe_app">
                  <img
                    className="card_github"
                    src="/images/github.png"
                    alt="github img"
                  />
                </a>
                <a href="https://poeapp-9beb2.web.app/">
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
                <a href="https://github.com/feneles/amazon-clone">
                  <img
                    className="card_github"
                    src="/images/github.png"
                    alt="github img"
                  />
                </a>
                <a href="https://clone-57744.web.app">
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
