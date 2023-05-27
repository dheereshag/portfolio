import React from "react";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { motion } from "framer-motion";
import "./Header.scss";
import headerIcons from "../../constants/headerIcons";
const Header = () => {
  return (
    <div id="home" className="flex flex-col lg:flex-row p-10 w-full">
      <div
        className="h-full animate__animated animate__fadeInLeft animate__delay-1s"
        style={{ flex: 0.65 }}
      >
        <div className="items-start w-full flex flex-col xl:items-end gap-8">
          <div className="flex p-4 rounded-3xl shadow-md items-center gap-8">
            <span>👋🏻</span>
            <div className="font-dm-sans text-lg">
              <p className="">Hello, I am</p>
              <h1 className="text-3xl text-violet-800 font-bold">John Doe</h1>
            </div>
          </div>
          <div className="flex flex-col px-5 py-4 shadow-sm border bg-blue-50 font-poppins rounded-3xl text-right">
            <p className="">web developer</p>
            <p className="">freelancer</p>
          </div>
        </div>
      </div>
      <div className="app__header-img flex flex-1 relative">
        <img
          src={images.profile}
          alt="profile_bg"
          className="w-full z-10 object-contain"
        />
        <img
          className="absolute overlay_circle w-full bottom-2 animate__animated animate__zoomIn animate__slow"
          src={images.circle}
          alt="profile_circle"
        />
      </div>

      <motion.div className="app__header-circles animate__animated animate__zoomIn">
        {headerIcons.map((icon, index) => (
          <motion.div
            className="app__flex"
            key={`circle-${index}`}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <i className={`ci ci-${icon.name} ci-${icon.size}`}></i>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
