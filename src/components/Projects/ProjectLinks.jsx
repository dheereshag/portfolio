import { motion } from "framer-motion";
const ProjectLinks = ({ project }) => {
  return (
    <motion.div
      transition={{
        duration: 0.25,
        type: "tween",
        staggerChildren: 0.5,
      }}
      className="group/dark flex justify-center items-center absolute h-full w-full hover:bg-black/50 gap-8 rounded-xl"
    >
      <a
        href={project?.liveLink}
        target="_blank"
        rel="noreferrer"
        className="group/icon app__flex w-12 h-12 bg-black/50 rounded-full opacity-0 group-hover/dark:opacity-100 transition-all"
      >
        <i className="fa-solid fa-eye fa-xl text-white transition-transform duration-300 transform-gpu group-hover/icon:scale-75"></i>
      </a>
      <a
        href={project?.githubLink}
        target="_blank"
        rel="noreferrer"
        className="group/icon app__flex w-12 h-12 bg-black/50 rounded-full opacity-0 group-hover/dark:opacity-100 transition-all"
      >
        <i className="fa-brands fa-github fa-xl text-white transition-transform duration-300 transform-gpu group-hover/icon:scale-75"></i>
      </a>
    </motion.div>
  );
};

export default ProjectLinks;
