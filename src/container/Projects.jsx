"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import { useFetchProjects } from "../hooks";
import {
  ProjectLinks,
  ProjectTabs,
  ProjectTechStacks,
  ProjectInfo,
} from "../components/Projects";

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

                    <ProjectLinks project={project} />
                  </div>
                  <div className="flex justify-center py-1 relative">
                    <ProjectTechStacks project={project} />
                    <ProjectInfo project={project} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
