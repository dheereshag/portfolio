import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import "./Footer.scss";
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
      <div>
        <strong className="p-text">@</strong>
        <motion.strong
          className="p-text font-poppins"
          onViewportEnter={() => setIsInView(true)}
        >
          {rounded}
        </motion.strong>

        <p className="p-text">&#10240;Dheeresh</p>
      </div>
      <p className="p-text">All rights reserved</p>
    </div>
  );
};

export default Footer;
