import React from "react";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { motion } from "framer-motion";
import "./Header.scss";

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <div className="app__header-info animate__animated animate__fadeInLeft animate__delay-1s">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋🏻</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">John Doe</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">web developer</p>
            <p className="p-text">freelancer</p>
          </div>
        </div>
      </div>
      <div className="app__header-img">
        <img src={images.profile} alt="profile_bg" />
        <img
          className="overlay_circle animate__animated animate__zoomIn animate__slow"
          src={images.circle}
          alt="profile_circle"
        />
      </div>

      <motion.div className="app__header-circles animate__animated animate__zoomIn">
        {[images.node, images.react, images.python].map((circle, index) => (
          <motion.div
            className="circle-cmp app__flex"
            key={`circle-${index}`}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <img src={circle} alt="circle" style={{ pointerEvents: "none" }} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
