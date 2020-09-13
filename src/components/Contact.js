import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(false);
  const [emailSent, setEmailSent] = useState("");

  return (
    <div className="contact">
      <h2 className="contact_topText">
        <span>{"<"}</span>contact<span>{">"}</span>
      </h2>
      <div className="contact_container"></div>
    </div>
  );
}

export default Contact;
