import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";
const navbarArr = [
  "home",
  "about",
  "work",
  "skills",
  "testimonials",
  "contact",
];
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <a className="app__navbar-logo" href="#home">
        <img src={images.logo} alt="logo" />
      </a>
      <ul className="app__navbar-links">
        {navbarArr.map((item) => (
          <li className="app__flex p-text hvr-grow" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <div className="animate__animated animate__fadeInRight">
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navbarArr.map((item) => (
                <li key={item} className="hvr-grow">
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
