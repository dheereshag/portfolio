"use client";
import React, { useRef, useEffect, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";
import "./Header.scss";
import headerIcons from "../../constants/headerIcons";
import { useInView } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
const Header = () => {
  const [isTippyLoaded, setIsTippyLoaded] = useState(false);
  const { isHeaderInView, setIsHeaderInView } = useContext(AppContext);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    setIsHeaderInView(isInView);
  }, [isInView, setIsHeaderInView, isHeaderInView]);
  const dragConstraints = {
    top: -100,
    left: -100,
    right: 100,
    bottom: 100,
  };
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row gap-4 mt-4 lg:gap-0 xl:mr-64"
      ref={ref}
    >
      <div className="animate__animated animate__fadeInLeft animate__delay-1s">
        <div className="items-start flex flex-col xl:items-end gap-8">
          <div className="flex gap-8 shadow rounded-2xl px-4 py-3 items-center">
            <span className="text-5xl">👋🏻</span>
            <div className="font-dm-sans flex flex-col gap-2">
              <p className="">Hello, I am</p>
              <p className="text-violet-800 font-semibold text-3xl">Dheeresh</p>
            </div>
          </div>
          <div className="flex flex-col py-3 px-14 border shadow font-poppins rounded-2xl text-right gap-1 text-sm">
            <p className="">web 🕸️ developer</p>
            <p className="">app 🤖 developer</p>
            <p className="">skilled in ML 🦾 & DS </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex relative">
          <img
            src="./profile2.png"
            alt="profile_bg"
            className="z-10 animate__animated animate__fadeIn animate__slow"
          />
          <img
            className="absolute bottom-2 animate__animated animate__zoomIn animate__slow"
            src="./circle.svg"
            alt="profile_circle"
          />
        </div>
        <Tippy
          content={`if you want to play around, drag the icons`}
          animation="scale" // Use the scale animation
          duration={[500, 500]}
          placement="right"
          arrow={true}
          delay={isTippyLoaded ? [3000, 0] : [0, 0]}
          onShown={() => setIsTippyLoaded(true)}
          className="font-karla border shadow-lg px-4 py-3"
        >
          <div className="flex lg:flex-col justify-evenly flex-wrap animate__animated animate__zoomIn animate__delay-1s animate__slow">
            <motion.div
              className="app__flex rounded-full shadow-md bg-white w-40 h-40 border"
              key={`circle-0`}
              drag
              dragConstraints={dragConstraints}
            >
              <i
                className={`ci ci-${headerIcons[0].name} ci-${headerIcons[0].size}`}
              ></i>
            </motion.div>

            <motion.div
              className="app__flex rounded-full shadow-md bg-white w-20 h-20 border"
              key={`circle-1`}
              drag
              dragConstraints={dragConstraints}
            >
              <i
                className={`ci ci-${headerIcons[1].name} ci-${headerIcons[1].size}`}
              ></i>
            </motion.div>

            <motion.div
              className="app__flex rounded-full shadow-md bg-white w-28 h-28 border"
              key={`circle-2`}
              drag
              dragConstraints={dragConstraints}
            >
              <i
                className={`ci ci-${headerIcons[2].name} ci-${headerIcons[2].size}`}
              ></i>
            </motion.div>
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home", "bg-blue-50");
