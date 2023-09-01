import { motion } from "framer-motion";

const Typewriter = ({ text, speed, delay }) => {
  return (
    <div>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * speed + delay }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default Typewriter;
