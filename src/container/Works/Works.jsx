import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { SiNextdotjs, SiWeb3Dotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Works.scss";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  useEffect(() => {
    const query = `*[_type == "works"]`;
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (item === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

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
            className={`app__work-filter-item app__flex p-text ${
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
        transition={{ duration: 0.5, delayChildren: 0.5 }}
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
                    <p className="p-text">{tag}</p>
                    {index < work?.tags?.length - 2 && (
                      <span className="pipe-separator p-text"> | </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="app__work-info">
                <aside>
                  <h4 className="bold-text">{work?.title}</h4>
                  <p className="p-text">{work?.description}</p>
                </aside>
                <SiWeb3Dotjs />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Works, "app__works"),
  "work",
  "app__primary-bg"
);
