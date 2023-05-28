import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, idName) =>
  function HOC() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
        className={`app__flex`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
