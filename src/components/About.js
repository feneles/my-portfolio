import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  let about = useRef(null);
  let aboutText = useRef(null);
  let aboutIcons = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      about,
      { y: '+=250', opacity: 0 },
      { y: 0, opacity: 1, duration: 1, scrollTrigger: about }
    );
    gsap.fromTo(
      aboutText,
      { y: '+=250', opacity: 0 },
      { y: 0, opacity: 1, duration: 1, scrollTrigger: aboutText }
    );
    gsap.fromTo(
      aboutIcons,
      { y: '+=250', opacity: 0 },
      { y: 0, opacity: 1, duration: 1, scrollTrigger: aboutIcons }
    );
  });

  return (
    <div className="about row" id="about">
      <h2 className="about_topText w-100" ref={el => (about = el)}>
        <span>{'<'}</span>about<span>{'>'}</span>
      </h2>
      <div className="about_container col-12">
        <div
          className="about_section col-lg-6 mx-auto"
          ref={el => (aboutText = el)}
        >
          <p>
            Hi, My name is Marek Rogala and I am a Frontend Developer. I'm
            currently based in Warsaw, Poland. I started learning programming
            more than year ago, since then I spent this whole time learning, and
            since then it became my passion. I'm currently working as Frontend
            Developer in OrangeMaple.
          </p>
        </div>
        <div
          className="skills_container col-lg-6"
          ref={el => (aboutIcons = el)}
        >
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
