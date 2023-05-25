import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, classNames) =>
  function HOC() {
    return (
      <motion.div
        initial={{ opacity: 0, y: [null,100] }}
        whileInView={{ opacity: 1, y: [null,0] }}
        transition={{ duration: 1, type: "tween" }}
        className={`${classNames} app__flex`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
