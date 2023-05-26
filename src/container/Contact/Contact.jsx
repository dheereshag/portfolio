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
    <div className="flex flex-col xl:flex-row gap-20 items-baseline">
      <aside className="flex flex-col md:flex-row items-center gap-4">
        <h2 className="font-dm-sans text-5xl font-semibold mb-10 text-neutral-600 mb-18">
          Take a coffee <span className="hvr-float">🍵</span> and chat with me
        </h2>
        <div className="flex flex-col gap-5 justify-center items-center my-5 w-full">
          <div className="w-11/12 md:w-full gap-4 hvr-icon-float hvr-shrink hover:shadow-md hover:shadow-pink-50 bg-rose-100 flex items-center px-5 py-4 rounded-3xl cursor-pointer">
            <img src={images.email} alt="email" className="hvr-icon w-9" />
            <a
              href="mailto:da11@iitbbs.ac.in"
              className="text-pink-500 font-pacifico"
            >
              da11@iitbbs.ac.in
            </a>
          </div>
          <div className="w-11/12 md:w-full gap-4 hvr-icon-rotate hvr-shrink hover:shadow-md hover:shadow-blue-50 bg-blue-100 flex items-center px-5 py-4 rounded-3xl cursor-pointer">
            <img src={images.mobile} alt="mobile" className="hvr-icon w-9" />
            <a
              href="tel:+91 9411245528"
              className="text-blue-800 font-pacifico text-sm"
            >
              +91 9411245528
            </a>
          </div>
        </div>
      </aside>

      {!isFormSubmitted ? (
        <form className="w-full xl:w-7/12">
          <section className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                className="font-karla text-sm hvr-box-shadow-inset p-4 bg-blue-50 outline-0 rounded-xl w-full"
                type="text"
                placeholder="Your Name"
                value={name}
                name="name"
                onChange={handleChangeInput}
                required
              />
            </div>
            <div className="w-full rounded-3xl">
              <input
                className="font-karla text-sm hvr-box-shadow-inset p-4 bg-blue-50 outline-0 rounded-xl w-full"
                type="email"
                placeholder="Your Email"
                value={email}
                name="email"
                onChange={handleChangeInput}
                required
              />
            </div>
          </section>
          <div className="my-4">
            <textarea
              className="font-karla text-sm hvr-box-shadow-inset p-4 bg-blue-50 outline-0 rounded-2xl w-full"
              type="text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
              rows={8}
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
    </div>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "bg-white"
);
