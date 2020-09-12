import React from "react";

function About() {
  return (
    <div className="about row px-0 mx-0">
      <h2 className="about_topText w-100">
        <span>{"<"}</span>about<span>{">"}</span>
      </h2>
      <div className="about_container col-lg-6 w-100 my-5">
        <ul className="about_list">
          <li className="about_li">
            <p className="about_text">main react</p>
          </li>
          <li className="about_li">
            <p className="about_text">designing in Figma</p>
          </li>
          <li className="about_li">
            <p className="about_text">
              animation in gsap and react transition group
            </p>
          </li>
          <li className="about_li">
            <p className="about_text">
              keeping state with help of complexAPI and hooks
            </p>
          </li>
          <li className="about_li">
            <p className="about_text">cos z gitem</p>
          </li>
          <li className="about_li">
            <p className="about_text">cos z RWD</p>
          </li>
          <li className="about_li">
            <p className="about_text">bootstrap</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
