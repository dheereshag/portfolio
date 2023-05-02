import "./Skills.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
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
      <div className="skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
