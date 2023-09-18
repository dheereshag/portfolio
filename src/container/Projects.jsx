"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import { useFetchProjects } from "../hooks";
import { ProjectTabs } from "../components/Projects";

const Projects = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const {
    activeFilter,
    filterProjects,
    isLoading,
    handleWorkFilter,
    animateCard,
  } = useFetchProjects();

  return (
    <div className="flex flex-col gap-10 md:gap-16 items-center mt-10">
      <h2 className="font-dm-sans text-3xl md:text-4xl xl:text-5xl font-semibold text-zinc-400 text-center leading-tight">
        My <span className="text-white">Projects</span> section
      </h2>
      {isLoading ? (
        <div className="text-white">Loading...</div>
      ) : (
        <div className="flex flex-col items-center gap-10 xl:gap-16">
          <ProjectTabs
            activeFilter={activeFilter}
            handleWorkFilter={handleWorkFilter}
          />

          <section>
            <motion.div
              animate={animateCard}
              transition={{ duration: 0.5, type: "tween" }}
              className="flex flex-wrap justify-center gap-8 lg:gap-14"
            >
              {filterProjects.map((project, index) => {
                return (
                  <motion.div
                    className="hvr-grow-shadow md:w-96 p-3 bg-zinc-800 rounded-3xl"
                    key={`${project.name}`}
                  >
                    <div className="flex relative">
                      <img
                        src={isImageLoading ? "blur.jpg" : project.imageUri}
                        alt={project.name}
                        className={`object-contain rounded-xl transition-all transform-gpu ${
                          isImageLoading ? "blur" : "blur-0"
                        }`}
                        onLoad={() => setIsImageLoading(false)}
                      />

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
                    </div>
                    <div className="flex justify-center py-1 relative">
                      <div className="flex items-center px-2 py-2 -top-5 bg-zinc-800 rounded-xl absolute">
                        <div className="flex items-center gap-1.5">
                          {project.techStacks.map((techStack) => (
                            <i
                              className={`ci ci-${techStack.icon.iconName} ci-${techStack.icon.iconStyle}`}
                            ></i>
                          ))}
                        </div>
                      </div>
                      <div className="flex relative mt-2">
                        <aside className="flex flex-col gap-2">
                          <h4 className="font-sora font-semibold text-white">
                            {project?.name}
                          </h4>
                          <p className="font-dm-sans break-words text-sm text-zinc-300">
                            {project?.description}
                          </p>
                        </aside>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>
        </div>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Projects, "projects"),
  "projects",
  "bg-zinc-900"
);
