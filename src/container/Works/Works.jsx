import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Works.scss";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: [null, 0], opacity: 1 });
  const [filterWorks, setFilterWorks] = useState([]);
  const [icons, setIcons] = useState([]);
  const [works, setWorks] = useState([]);
  useEffect(() => {
    const query = `*[_type == "works"]`;
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
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
      if (item === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  console.log("icons", icons[0]?.length);
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> section
      </h2>
      <div className="app__work-filter">
        {["ui/ux", "web app", "all"].map((item, index) => (
          <motion.div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex  ${
              activeFilter === item ? "item-active" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, type: "tween" }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work, index) => (
          <motion.div
            className="app__work-item app__flex hvr-grow"
            key={index}
            onClick={() => window.open(work?.projectLink, "_blank")}
            target="_blank"
          >
            <div className="app__work-img app__flex">
              <img src={urlFor(work.image)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  type: "tween",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work?.projectLink} target="_blank" rel="noreferrer">
                  <motion.div className="app__flex hvr-shrink">
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work?.codeLink} target="_blank" rel="noreferrer">
                  <motion.div className="app__flex hvr-shrink">
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <div className="app__work-tag app__flex">
                {work?.tags?.slice(0, -1).map((tag, index) => (
                  <React.Fragment key={index}>
                    <p className="">{tag}</p>
                    {index < work?.tags?.length - 2 && (
                      <span className="pipe-separator "> | </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="app__work-info">
                <aside>
                  <h4 className="bold-text">{work?.title}</h4>
                  <p className="">{work?.description}</p>
                </aside>
                <AnimatePresence>
                  <motion.div
                    key={`${index}-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, type: "tween" }}
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
    </>
  );
};
const IconComponent = ({ name, size }) => {
  return <i className={`ci ci-${name} ci-${size}`} />;
};

export default AppWrap(
  MotionWrap(Works, "app__works"),
  "projects",
  "app__primary-bg"
);
