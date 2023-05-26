import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Contact.scss";
import { motion } from "framer-motion";

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
      <h2 className="font-dm-sans text-5xl font-semibold mb-10 text-neutral-600">
        Take a coffee 🍵 and chat with me
      </h2>
      <div className="app__contact-cards">
        <div className="app__contact-card hvr-shrink" id="email">
          <img src={images.email} alt="email" />
          <a
            href="mailto:da11@iitbbs.ac.in"
            className="text-neutral-500 font-pacifico"
          >
            da11@iitbbs.ac.in
          </a>
        </div>
        <div className="app__contact-card hvr-shrink" id="phone">
          <img src={images.mobile} alt="mobile" />
          <a
            href="tel:+91 9411245528"
            className="text-neutral-500 font-pacifico text-sm"
          >
            +91 9411245528
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__contact-form w-7/12">
          <section>
            <div>
              <input
                className="font-karla text-sm hvr-box-shadow-inset p-4"
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
                className="font-karla text-sm hvr-box-shadow-inset p-4"
                type="email"
                placeholder="Your Email"
                value={email}
                name="email"
                onChange={handleChangeInput}
                required
              />
            </div>
          </section>
          <div>
            <textarea
              className="font-karla text-sm hvr-box-shadow-inset p-4"
              type="text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-violet-800 rounded-3xl font-inter text-base text-white px-5 py-4 mt-2 shadow-md hover:shadow-violet-400/50 hover:bg-violet-900 transition-all duration-300"
            onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      ) : (
        <div>
          <h3 className="">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "bg-white"
);
