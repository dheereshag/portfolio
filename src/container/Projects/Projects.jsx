"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

const items = [
  { name: "next", iconStyle: "md" },
  { name: "django", iconStyle: "md mt-px" },
  { name: "node", iconStyle: "md" },
  { name: "spring", iconStyle: "md" },
  { name: "all" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCard, setAnimateCard] = useState({ y: [null, 0], opacity: 1 });
  const [filterProjects, setFilterProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("http://18.222.249.158:8080/projects");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);
        setFilterProjects(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    }

    fetchProjects();
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: [null, 30], opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: [null, 0], opacity: 1 });
      if (item.name === "all") {
        setFilterProjects(projects);
      } else {
        setFilterProjects(
          projects.filter((project) =>
            project.tags.some((tag) => tag.name === item.name)
          )
        );
      }
    }, 500);
  };
  return (
    <div className="flex flex-col gap-10 md:gap-16 items-center mt-10 md:mt-4 xl:mt-0">
      <h2 className="font-dm-sans text-4xl xl:text-5xl font-semibold text-zinc-300 text-center leading-tight">
        My <span className="text-white">Projects</span> section
      </h2>
      <div className="flex flex-col items-center gap-10 xl:gap-16">
        <section className="gap-6 flex flex-wrap justify-center">
          {items.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`px-5 py-3 font-sora font-semibold text-sm text-zinc-300 ${
                activeFilter === item
                  ? "rounded-none bg-black"
                  : "rounded-xl bg-zinc-800"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="flex items-center gap-1">
                <span>{item.name}</span>
                {item.name !== "all" && (
                  <i className={`ci ci-${item.name} ci-${item.iconStyle}`}></i>
                )}
              </div>
            </motion.button>
          ))}
        </section>
        {/*         
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
                  key={`${project.title}-${index}`}
                >
                  <div className="flex relative">
                    <img
                      src={urlFor(project.image)}
                      alt={project.title}
                      className="object-contain rounded-xl"
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
                        href={project?.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="group/icon app__flex w-12 h-12 bg-black/50 rounded-full opacity-0 group-hover/dark:opacity-100 transition-all"
                      >
                        <i className="fa-solid fa-eye fa-xl text-white transition-transform duration-300 transform-gpu group-hover/icon:scale-75"></i>
                      </a>
                      <a
                        href={project?.codeLink}
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
                        {project.icons.map((icon) => (
                          <i className={`ci ci-${icon.icon} ${icon.size}`}></i>
                        ))}
                      </div>
                    </div>
                    <div className="flex relative mt-2">
                      <aside className="flex flex-col gap-2">
                        <h4 className="font-sora font-semibold text-white">
                          {project?.title}
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
        </section> */}

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
                      src={project.imageUri}
                      alt={project.name}
                      className="object-contain rounded-xl"
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
    </div>
  );
};

export default AppWrap(
  MotionWrap(Projects, "projects"),
  "projects",
  "bg-zinc-900"
);
