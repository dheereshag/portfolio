import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import SocialMedia from "../SocialMedia";
const Footer = () => {
  const count = useMotionValue(2000);
  const rounded = useTransform(count, Math.round);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const animation = animate(count, 2023, { duration: 3 });
    return animation.stop;
  }, [count, isInView]);
  return (
    <div className="flex flex-col md:absolute md:right-0 md:bottom-2 gap-3 mt-20">
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
        iconStyles={"ci-lg"}
        childStyles={
          "hvr-icon-rotate bg-white rounded-full w-10 h-10 border app__flex shadow"
        }
      />
    </div>
  );
};

export default Footer;
