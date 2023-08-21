"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "@/client";

const items = ["next", "django", "node", "nuxt", "all"];
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCard, setAnimateCard] = useState({ y: [null, 0], opacity: 1 });
  const [filterProjects, setFilterProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const query = `*[_type == "projects"] | order(title desc)`;
    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: [null, 30], opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: [null, 0], opacity: 1 });
      if (item === "all") {
        setFilterProjects(projects);
      } else {
        setFilterProjects(
          projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 500);
  };
  return (
    <div className="flex flex-col gap-10 md:gap-16 items-center mt-10 md:mt-4 xl:mt-0">
      <h2 className="font-dm-sans text-4xl xl:text-5xl font-semibold text-gray-700 text-center leading-tight">
        My <span className="text-violet-800">Projects</span> section
      </h2>
      <div className="flex flex-col items-center gap-10 xl:gap-16">
        <div className="gap-6 flex flex-wrap justify-center">
          {items.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`px-5 py-3 shadow-md rounded-xl font-karla font-semibold hover:bg-violet-900 hover:text-white ${
                activeFilter === item
                  ? "bg-violet-900 text-white"
                  : "bg-white text-gray-800"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="flex items-center gap-1">
                <span>{item}</span>
                {item !== "all" && (
                  <i
                    className={`ci ci-${item} ${
                      item === "django" ? "mt-1" : ""
                    }`}
                  ></i>
                )}
              </div>
            </motion.button>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, type: "tween" }}
          className="flex flex-wrap justify-center gap-8 lg:gap-14"
        >
          {filterProjects.map((project, index) => {
            return (
              <motion.div
                className="hvr-grow-shadow md:w-96 p-3 bg-white border shadow-lg rounded-3xl"
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
                      <i className="fa-solid fa-eye fa-xl text-white transition-transform duration-300 transform-gpu group-hover/icon:scale-90"></i>
                    </a>
                    <a
                      href={project?.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="group/icon app__flex w-12 h-12 bg-black/50 rounded-full opacity-0 group-hover/dark:opacity-100 transition-all"
                    >
                      <i className="fa-brands fa-github fa-xl text-white transition-transform duration-300 transform-gpu group-hover/icon:scale-90"></i>
                    </a>
                  </motion.div>
                </div>
                <div className="flex justify-center py-1 relative">
                  <div className="flex items-center px-3 py-2 -top-6 bg-white rounded-xl absolute">
                    <div className="flex items-center gap-1">
                      {project.icons.map((icon) => (
                        <i className={`ci ci-${icon.icon} ${icon.size}`}></i>
                      ))}
                    </div>
                  </div>
                  <div className="flex relative mt-2">
                    <aside className="flex flex-col gap-2">
                      <h4 className="font-poppins font-semibold text-violet-900">
                        {project?.title}
                      </h4>
                      <p className="font-dm-sans break-words">
                        {project?.description}
                      </p>
                    </aside>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Projects, "projects"),
  "projects",
  "bg-white"
);
