import React, { useRef, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { motion } from "framer-motion";
import "./Header.scss";
import headerIcons from "../../constants/headerIcons";
import { useInView } from "framer-motion";
import { set } from "immutable";
const Header = () => {
  const { isHeaderInView, setIsHeaderInView } = useContext(AppContext);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    setIsHeaderInView(isInView);
  }, [isInView, setIsHeaderInView, isHeaderInView]);
  return (
    <div id="home" className="flex flex-col lg:flex-row" ref={ref}>
      <div className="animate__animated animate__fadeInLeft animate__delay-1s">
        <div className="items-start flex flex-col xl:items-end gap-8">
          <div className="flex gap-8 shadow rounded-2xl px-4 py-3 items-center">
            <span className="text-5xl">👋🏻</span>
            <div className="font-dm-sans flex flex-col gap-2">
              <p className="">Hello, I am</p>
              <p className="text-violet-800 font-semibold text-3xl">John Doe</p>
            </div>
          </div>
          <div className="flex flex-col px-5 py-4 shadow font-poppins rounded-2xl text-right">
            <p className="">web developer</p>
            <p className="">freelancer</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="app__header-img flex relative">
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

        <div className="flex lg:flex-col justify-evenly flex-wrap animate__animated animate__zoomIn">
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
            className="app__flex rounded-full shadow-md bg-white w-20 h-20"
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
    </div>
  );
};

export default AppWrap(Header, "home");
