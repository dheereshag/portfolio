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
    <div>
      <h2 className="font-dm-sans text-5xl font-semibold mb-10 text-gray-700 text-center">
        Skills & Experiences
      </h2>
      <div className="flex flex-col lg:flex-row gap-20">
        <motion.div className="flex flex-1 flex-wrap justify-center">
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
              <motion.div className="app__flex bg-neutral-100 rounded-3xl md:w-24 md:h-24 hvr-box-shadow-inset w-20 h-20">
                <i
                  className={`ci ci-${skill.icon} ci-${skill.size} w-8/12 md:w-full hvr-buzz`}
                ></i>
              </motion.div>
              <p className="font-poppins text-sm text-neutral-700">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-col flex-1">
          {experiences?.map((experience) => (
            <div className="flex gap-20" key={experience?.year}>
              <p className="font-bold text-violet-800 font-poppins">
                {experience?.year}
              </p>

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
                    className="font-inter font-bold"
                  >
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                    >
                      <h4 className="font-dm-sans text-lg font-semibold text-neutral-500">
                        {work?.name}
                      </h4>
                      <div className="flex items-center -mt-5">
                        <p className="mr-2 font-karla mb-1">{work?.company}</p>
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
    </div>
  );
};

export default AppWrap(MotionWrap(Skills), "skills", "bg-white");
