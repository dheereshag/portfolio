import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
const Footer = () => {
  const count = useMotionValue(2000);
  const rounded = useTransform(count, Math.round);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const animation = animate(count, 2023, { duration: 2 });
    return animation.stop;
  }, [count, isInView]);
  return (
    <div className="copyright">
      <div className="flex items-baseline">
        <div className="font-pacifico text-purple-800">@</div>
        <motion.div
          onViewportEnter={() => setIsInView(true)}
          className="font-pacifico text-purple-800"
        >
          {rounded}
        </motion.div>

        <p className="ml-1 font-dancing-script">Dheeresh</p>
      </div>
      <p className="font-dancing-script">All rights reserved</p>
    </div>
  );
};

export default Footer;
