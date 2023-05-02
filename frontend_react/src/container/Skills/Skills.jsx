import "./Skills.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as ReactTooltip from "react-tooltip";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const skillsQuery = `*[_type == "skills"]`;
    const experiencesQuery = `*[_type == "experiences"]`;
    client.fetch(skillsQuery).then((skills) => {
      setSkills(skills);
    });

    client.fetch(experiencesQuery).then((experiences) => {
      setExperiences(experiences);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Skills and Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill?.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill?.bgColor }}
              >
                <motion.img
                  src={urlFor(skill?.icon)}
                  alt={skill?.name}
                  whileHover={{
                    x: [0, -5, 5, -5, 5, 0],
                    rotate: [-3, 3, -3, 3, -3],
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                      loop: Infinity,
                    },
                  }}
                />
              </div>
              <p className="p-text">{skill?.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences?.works?.map((work) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={work?.name}
                key={work?.name}
              >
                <h4 className="bold-text">{work?.name}</h4>
                <p className="p-text">{work?.company}</p>
              </motion.div>
              <ReactTooltip
                id={work?.name}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                {work?.description}
              </ReactTooltip>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");
