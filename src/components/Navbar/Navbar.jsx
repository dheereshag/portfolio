import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { images, menuItems } from "../../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const closeMenu = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setToggle(false);
      setAnimateOut(false);
    }, 500);
  };
  return (
    <nav className="app__navbar">
      <a className="app__navbar-logo" href="#home">
        <img src={images.logo} alt="logo" />
      </a>
      <ul className="app__navbar-links">
        {menuItems.map((item) => (
          <li className="app__flex  hvr-grow" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <div
            className={`menu-container animate__animated ${
              animateOut ? "animate__fadeOutRight" : "animate__fadeInRight"
            }`}
          >
            <HiX onClick={closeMenu} />
            <ul>
              {menuItems.map((item) => (
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
