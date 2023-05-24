import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!name || !email || !message) {
      return;
    }
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me</h2>
      <div className="app__contact-cards">
        <div className="app__contact-card hvr-shrink" id="email">
          <img src={images.email} alt="email" />
          <a href="mailto:da11@iitbbs.ac.in" className="p-text">
            da11@iitbbs.ac.in
          </a>
        </div>
        <div className="app__contact-card hvr-shrink" id="phone">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91 9411245528" className="p-text">
            +91 9411245528
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__contact-form">
          <div>
            <input
              className="p-text hvr-box-shadow-inset"
              type="text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <input
              className="p-text hvr-box-shadow-inset"
              type="text"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text hvr-box-shadow-inset"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="submit" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__white-bg"
);
