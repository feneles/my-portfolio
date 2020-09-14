import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

init("user_BRBbNz2r5kJC6XFAc7PTu");

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let contactTop = useRef(null);
  let textAboveForm = useRef(null);
  let contactForm = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contactTop,
      { x: "+=250", opacity: 0 },
      { x: 0, opacity: 1, duration: 1, scrollTrigger: contactTop }
    );
    gsap.fromTo(
      textAboveForm,
      { x: "-=250", opacity: 0 },
      { x: 0, opacity: 1, duration: 1, scrollTrigger: textAboveForm }
    );
    gsap.fromTo(
      contactForm,
      { x: "+=250", opacity: 0 },
      { x: 0, opacity: 1, duration: 1, scrollTrigger: contactForm }
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };
    console.log(process.env.REACT_APP_SERVICE_ID);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams
      )
      .then(
        function (response) {
          alert("Your email has been sent.");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="contact px-0 mx-0" id="contact">
      <h2 className="contact_topText" ref={(el) => (contactTop = el)}>
        <span>{"<"}</span>contact<span>{">"}</span>
      </h2>
      <p ref={(el) => (textAboveForm = el)}>You can reach out to me below.</p>

      <div className="contact_container col-md-6 offset-md-3">
        <Form ref={(el) => (contactForm = el)} className="contact_form">
          <Form.Group>
            <Form.Label htmlFor="full-name">Name</Form.Label>
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <button
            onClick={handleSubmit}
            className="contact_button"
            type="submit"
          >
            Send
          </button>
        </Form>
      </div>
      <footer className="footer col-12">
        <div className="footer_iconContainer col-md-6 offset-md-3 py-3">
          <div className="d-inline-block mx-3">
            <a href="https://github.com/feneles">
              <img
                className="footer_icon"
                src="/images/github.png"
                alt="github img"
              />
            </a>
          </div>
          <div className="d-inline-block mx-3">
            <a href="https://www.linkedin.com/in/marek-rogala-432bba1b6/">
              <img
                className="footer_icon"
                src="/images/linkedin.png"
                alt="linkedin img"
              />
            </a>
          </div>
        </div>
        <p className="footer_copyrights">© All rights reserved, 2020</p>
      </footer>
    </div>
  );
}

export default Contact;
