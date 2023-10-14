import { motion } from "framer-motion";
const LoadingButton = ({ loading }) => {
  return (
    <motion.button
      type="submit"
      className={`font-inter text-base text-white px-5 py-4 shadow-md hover:bg-black hover:rounded-xl transition-all transform-gpu duration-300 hover:scale-90 ${
        loading ? "bg-black" : "bg-zinc-700"
      }`}
    >
      {loading ? "Sending..." : "Send Message"}
    </motion.button>
  );
};

export default LoadingButton;
