import React, { useState, useEffect } from "react";
import { BsEyeFill, BsGithub } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const items = ["next", "react", "nuxt", "django", "all"];
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCard, setAnimateCard] = useState({ y: [null, 0], opacity: 1 });
  const [filterProjects, setFilterProjects] = useState([]);
  const [icons, setIcons] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const query = `*[_type == "projects"]`;
    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProjects(data);
      const techStackArray = data.map((work) => work.icons); // Extracting techStack array from each work object
      setIcons((prevIcons) => [...prevIcons, ...techStackArray]); // Pushing techStack array into icons array
    });
  }, []);

  useEffect(() => {
    if (!icons) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons[0]?.length);
    }, 2000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [icons]);
  // console.log("icons", icons);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: [null, 30], opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: [null, 0], opacity: 1 });
      if (item === "all") {
        setFilterProjects(projects);
      } else {
        setFilterProjects(projects.filter((work) => work.tags.includes(item)));
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
          {filterProjects.map((work, index) => (
            <motion.div
              className="hvr-grow-shadow md:w-96 p-3 bg-white border shadow-lg rounded-3xl"
              key={index}
            >
              <div className="flex relative">
                <img
                  src={urlFor(work.image)}
                  alt={work.name}
                  className="object-contain rounded-xl"
                />
                <motion.div
                  transition={{
                    duration: 0.25,
                    type: "tween",
                    staggerChildren: 0.5,
                  }}
                  className="flex justify-center items-center absolute h-full w-full hover:bg-black/50 gap-8 group rounded-xl"
                >
                  <a
                    href={work?.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="app__flex hvr-icon-shrink w-12 h-12 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <BsEyeFill className="text-white w-6 h-6 hvr-icon" />
                  </a>
                  <a
                    href={work?.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="app__flex hvr-icon-shrink w-12 h-12 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <BsGithub className="text-white w-6 h-6 hvr-icon" />
                  </a>
                </motion.div>
              </div>
              <div className="flex justify-center py-1 relative">
                <div className="flex items-center px-3 py-2 -top-6 bg-white rounded-xl absolute">
                  <div className="flex items-center gap-1">
                    <i
                      className={`ci ci-${work?.tags[0]} ci-xs ${
                        work?.tags[0] === "django" ? "mt-0.5" : ""
                      }`}
                    ></i>
                    <p className="font-inter text-sm">{work?.tags[0]}</p>
                  </div>
                </div>
                <div className="flex relative mt-2">
                  <aside className="flex flex-col gap-2">
                    <h4 className="font-poppins font-semibold text-violet-900">
                      {work?.title}
                    </h4>
                    <p className="font-dm-sans w-10/12">{work?.description}</p>
                  </aside>
                  <AnimatePresence>
                    <motion.div
                      key={`${index}-${currentIndex}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, type: "tween" }}
                      className="absolute right-0 bottom-0"
                    >
                      <IconComponent
                        name={icons[index][currentIndex]?.icon}
                        size={icons[index][currentIndex]?.size}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
const IconComponent = ({ name, size }) => {
  return <i className={`ci ci-${name} ci-${size}`} />;
};

export default AppWrap(
  MotionWrap(Projects, "projects"),
  "projects",
  "bg-blue-50"
);
