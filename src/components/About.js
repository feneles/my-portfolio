import React, { useEffect } from "react";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);
  return (
    <div className="about row" id="about">
      <h2 className="about_topText w-100">
        <span>{"<"}</span>about<span>{">"}</span>
      </h2>
      <div className="about_container col-12">
        <div className="about_section col-lg-6 mx-auto">
          <p>
            Hi, My name is Marek Rogala and I am a Frontend Developer. I'm
            currently based in Warsaw, Poland. I staretd learning programming
            half a year ago, since then I spend whole days learning. Now it
            became my passion. I'm focusing on React and looking forward to
            learn React Native.
          </p>
        </div>
        <div className="skills_container col-lg-6">
          <div className="skill_box">
            <div className="skill_title">
              <div className="skill_img">
                <img className="skill_icon" src="images/html.png" alt="icon" />
              </div>
              <h3>HTML</h3>
            </div>
          </div>
          <div className="skill_box">
            <div className="skill_title">
              <div className="skill_img">
                <img className="skill_icon" src="images/css.png" alt="icon" />
              </div>
              <h3>CSS</h3>
            </div>
          </div>
          <div className="skill_box">
            <div className="skill_title">
              <div className="skill_img">
                <img
                  className="skill_icon"
                  src="images/bootstrap.png"
                  alt="icon"
                />
              </div>
              <h3>Bootstrap</h3>
            </div>
          </div>
          <div className="skill_box">
            <div className="skill_title">
              <div className="skill_img">
                <img className="skill_icon" src="images/js.png" alt="icon" />
              </div>
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="skill_box">
            <div className="skill_title">
              <div className="skill_img">
                <img className="skill_icon" src="images/react.png" alt="icon" />
              </div>
              <h3>React</h3>
            </div>
          </div>
          <div className="skill_box">
            <div className="skill_title">
              <div className="skill_img">
                <img className="skill_icon" src="images/git.png" alt="icon" />
              </div>
              <h3>GIT</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
