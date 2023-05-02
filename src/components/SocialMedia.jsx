import React from "react";
import { motion } from "framer-motion";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <BsTwitter />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <FaFacebookF />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <BsInstagram />
      </motion.div>
    </div>
  );
};

export default SocialMedia;
