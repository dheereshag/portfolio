import React, { useState, useEffect } from "react";
import { BsEyeFill, BsGithub } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

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
    setAnimateCard({ y: [null, 50], opacity: 0 });
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
      <h2 className="font-dm-sans text-4xl xl:text-5xl font-semibold text-gray-700 text-center">
        My Creative <span className="text-violet-800">Portfolio</span> section
      </h2>
      <div className="flex flex-col items-center gap-10 xl:gap-16">
        <div className="gap-6 flex">
          {["ui/ux", "web app", "all"].map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`px-5 py-3 shadow-md rounded-xl font-dm-sans font-semibold hover:bg-violet-900 hover:text-white ${
                activeFilter === item
                  ? "bg-violet-900 text-white"
                  : "bg-white text-gray-800"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item}
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
              className="hvr-grow-shadow md:w-72 lg:w-80 p-3 rounded-3xl bg-white border shadow-lg"
              key={index}
            >
              <div className="flex relative">
                <img
                  src={urlFor(work.image)}
                  alt={work.name}
                  className="rounded-3xl object-cover"
                />
                <motion.div
                  transition={{
                    duration: 0.25,
                    type: "tween",
                    staggerChildren: 0.5,
                  }}
                  className="flex justify-center items-center absolute w-full h-full hover:bg-black/50 rounded-3xl gap-8 group"
                >
                  <a
                    href={work?.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="app__flex hvr-shrink w-12 h-12 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <BsEyeFill className="text-white w-6 h-6" />
                  </a>
                  <a
                    href={work?.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="app__flex hvr-shrink w-12 h-12 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <BsGithub className="text-white w-6 h-6" />
                  </a>
                </motion.div>
              </div>
              <div className="flex justify-center p-1 relative">
                <div className="flex items-center px-3 py-2 -top-7 bg-white rounded-xl absolute">
                  {work?.tags?.slice(0, -1).map((tag, index) => (
                    <React.Fragment key={index}>
                      <p className="font-inter text-sm">{tag}</p>
                      {index < work?.tags?.length - 2 && (
                        <span className="mx-1 font-inter text-sm"> | </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="flex relative mt-2">
                  <aside className="flex flex-col gap-2">
                    <h4 className="font-poppins font-semibold text-violet-900">
                      {work?.title}
                    </h4>
                    <p className="font-dm-sans text-sm lg:text-base w-9/12">
                      {work?.description}
                    </p>
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

export default AppWrap(MotionWrap(Projects), "projects", "bg-blue-50");
