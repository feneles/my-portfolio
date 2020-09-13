import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { db } from "../firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been sended");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="contact">
      <h2 className="contact_topText">
        <span>{"<"}</span>contact<span>{">"}</span>
      </h2>
      <div className="contact_container col-md-6 offset-md-3">
        <Form className="contact_form">
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
          <div className="d-inline-block mr-3">
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
          <div className="d-inline-block ml-3">
            <a href="https://www.facebook.com/marek.rogala.16/">
              <img
                className="footer_icon"
                src="/images/facebook.png"
                alt="fecebook img"
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
