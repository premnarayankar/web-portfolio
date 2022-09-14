import React, { memo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState(false);
  const [msg, setMsg] = useState("Message Sent");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yxrt6ua",
        "template_u5js7gh",
        form.current,
        "pEWmbMG5PeAMLdhpC"
      )
      .then(
        (result) => {
          result.text == "OK" && setFormStatus(true);
          setTimeout(() => {
            setFormStatus(false);
          }, 2000);
        },
        (error) => {
          error.text &&
            setMsg(
              "Sorry for Inconvenience contact on premnarayankar036@gmail.com"
            );
        }
      );
  };

  return (
    <div className="bg">
      <div id="contacts" className="container">
        <div className="me-box">
          <h1 className="sub-heading">contact</h1>
          <p className="info center">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            {formStatus && (
              <div>
                <h1 className="title-heading">{msg}</h1>
              </div>
            )}
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Enter Your Name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter Your Email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <div>
              <button className="btn submit-btn">submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(Contacts);
