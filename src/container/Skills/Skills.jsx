import "./Skills.scss";
import React, { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { skills } from "../../constants";
const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const x = useSpring(0, { stiffness: 500, damping: 20 });

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
              style={{ x }}
              drag="x"
              onDragEnd={(event, info) => x.set(info.point.x)}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={1}
            >
              <motion.div
                className="app__flex"
                style={{ backgroundColor: "var(--icon-background-color)" }}
              >
                <i
                  className={`ci ci-${skill.icon} ci-${skill.size} hvr-buzz`}
                ></i>
              </motion.div>
              <p className="">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <div className="app__skills-exp-item" key={experience?.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience?.year}</p>
              </div>
              <div className="app__skills-exp-works">
                {experience?.works?.map((work, index) => (
                  <Tippy
                    key={`${work.name}-${index}`}
                    content={work?.description}
                    animation="scale" // Use the scale animation
                    duration={[500, 500]}
                    placement="top"
                    arrow={true}
                    interactive={true}
                  >
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                    >
                      <h4 className="bold-text">{work?.name}</h4>
                      <div className="flex items-center">
                        <p className=" mr-2 text-lg">{work?.company}</p>
                        <i className={`ci ci-${work?.icon} ci-${work?.size}`} />
                      </div>
                    </motion.div>
                  </Tippy>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__white-bg"
);
