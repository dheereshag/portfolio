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
          <div className="flex p-4 rounded-3xl shadow-md items-center gap-8 font-dm-sans">
            <span className="text-3xl">👋🏻</span>
            <h1 className="text-violet-800 font-bold">I'm John Doe</h1>
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

      <div
        className="flex xl:flex-col justify-evenly flex-wrap animate__animated animate__zoomIn"
        style={{ flex: 0.75 }}
      >
        <motion.div
          className="app__flex rounded-full shadow-md bg-white w-36 h-36"
          key={`circle-0`}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <i
            className={`ci ci-${headerIcons[0].name} ci-${headerIcons[0].size}`}
          ></i>
        </motion.div>

        <motion.div
          className="app__flex rounded-full shadow-md bg-white w-20 h-20 lg:ml-6"
          key={`circle-1`}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <i
            className={`ci ci-${headerIcons[1].name} ci-${headerIcons[1].size}`}
          ></i>
        </motion.div>

        <motion.div
          className="app__flex rounded-full shadow-md bg-white w-24 h-24"
          key={`circle-2`}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <i
            className={`ci ci-${headerIcons[2].name} ci-${headerIcons[2].size}`}
          ></i>
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
