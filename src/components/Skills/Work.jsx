import { motion } from "framer-motion";

const Work = ({ work }) => (
  <motion.div
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-3"
  >
    <p className="font-sora text-white text-sm md:text-lg font-semibold">
      {work?.companyName}
    </p>
    <p className="font-sora text-sm md:text-base text-zinc-300">
      {work?.role} {work?.duration}
    </p>
  </motion.div>
);

export default Work;
