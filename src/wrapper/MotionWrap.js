import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, classNames) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{
          duration: 1.2, // Increase the duration to make the animation slower
          type: "tween", // Define the animation type
          delay: 0.1, // Add a small delay before starting the animation
        }}
        className={`${classNames} app__flex`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
