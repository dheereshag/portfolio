"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import SocialMedia from "../SocialMedia";
const Footer = () => {
  const count = useMotionValue(2000);
  const rounded = useTransform(count, Math.round);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const animation = animate(count, 2023, { duration: 6 });
    return animation.stop;
  }, [count, isInView]);
  return (
    <div className="flex flex-col items-end absolute gap-3 right-0 bottom-0">
      <div>
        <div className="flex items-baseline">
          <p className="font-pacifico text-purple-800">@</p>
          <motion.p
            onViewportEnter={() => setIsInView(true)}
            className="font-pacifico text-purple-800"
          >
            {rounded}
          </motion.p>
          <p className="ml-1 font-dancing-script">Dheeresh</p>
        </div>
        <p className="font-dancing-script">All rights reserved</p>
      </div>
      <SocialMedia
        parentStyles={"flex gap-3 md:hidden"}
        iconStyles={
          "ci-xl transition-transform duration-300 transform-gpu group-hover:scale-125 group-hover:rotate-12"
        }
        childStyles={"bg-white rounded-full w-12 h-12 border app__flex shadow"}
      />
    </div>
  );
};

export default Footer;
