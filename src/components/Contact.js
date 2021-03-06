import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

init("user_BRBbNz2r5kJC6XFAc7PTu");

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    if (name === "") {
      setNameError(true);
      return;
    } else setNameError(false);

    if (!email.includes("@")) {
      setEmailError(true);
      return;
    } else setEmailError(false);

    if (message === "") {
      setMessageError(true);
      return;
    } else setMessageError(false);

    const templateParams = {
      name,
      email,
      message,
    };

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
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact px-0 mx-0" id="contact">
      <h2 className="contact_topText">
        <span>{"<"}</span>contact<span>{">"}</span>
      </h2>
      <p>You can reach out to me below.</p>

      <div className="contact_container col-md-6 offset-md-3">
        <Form className="contact_form" noValidate>
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
          {nameError === true && (
            <div style={{ color: "red" }}>Name Required</div>
          )}
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
          {emailError === true && (
            <div style={{ color: "red" }}>Email Required</div>
          )}
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
          {messageError === true && (
            <div style={{ color: "red" }}>Message Required</div>
          )}
          <button
            onClick={handleForm}
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
            <a href="https://github.com/feneles" target="_blank">
              <img
                className="footer_icon"
                src="/images/github.png"
                alt="github img"
              />
            </a>
          </div>
          <div className="d-inline-block mx-3">
            <a
              href="https://www.linkedin.com/in/marek-rogala-432bba1b6/"
              target="_blank"
            >
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
