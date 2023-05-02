import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "testimonials", "contact"].map(
          (item) => (
            <motion.li
              className="app__flex p-text"
              key={`link-${item}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <a href={`#${item}`}>{item}</a>
            </motion.li>
          )
        )}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "testimonials",
                "contact",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, type: "tween" }}
                >
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
