import "./Skills.scss";
import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, useInView } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { skills } from "../../constants";
import { AppContext } from "../../context/AppContext";
const Skills = () => {
  const { isSkillsInView, setIsSkillsInView } = useContext(AppContext);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    setIsSkillsInView(isInView);
  }, [isInView, setIsSkillsInView, isSkillsInView]);

  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    client.fetch(query).then((data) => {
      const sortedExperiences = data.sort((a, b) => a?.year - b?.year);
      setExperiences(sortedExperiences);
    });
  }, []);
  const dragConstraints = {
    top: -50,
    left: -50,
    right: 50,
    bottom: 50,
  };
  return (
    <div
      className="flex flex-col gap-10 lg:gap-20 lg:mt-6 mt-10 xl:mt-0"
      ref={ref}
    >
      <h2 className="font-dm-sans text-4xl xl:text-5xl font-semibold text-neutral-800 text-center leading-tight">
        Skills <span className="text-violet-900">&</span> Experiences
      </h2>
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-28 items-center lg:items-start">
        <motion.div className="flex flex-wrap justify-center gap-7 xl:w-8/12">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex flex-col text-center gap-2"
              key={index}
              drag
              dragConstraints={dragConstraints}
            >
              <motion.div className="app__flex bg-neutral-100 shadow border rounded-3xl md:w-24 md:h-24 hvr-box-shadow-inset w-20 h-20">
                <i
                  className={`ci ci-${skill.icon} ci-${skill.size} w-8/12 md:w-full hvr-buzz`}
                ></i>
              </motion.div>
              <p className="font-poppins text-sm font-semibold text-neutral-600">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-col gap-5 xl:w-4/12">
          {experiences?.map((experience) => (
            <div className="flex gap-16 items-baseline" key={experience?.year}>
              <p className="font-bold text-violet-800 font-poppins text-lg">
                {experience?.year}
              </p>
              <div className="">
                {experience?.works?.map((work, index) => (
                  <Tippy
                    key={`${work.name}-${index}`}
                    content={work?.description}
                    animation="scale" // Use the scale animation
                    duration={[500, 500]}
                    placement="top"
                    arrow={true}
                    className="font-poppins border shadow-lg px-4 py-3"
                  >
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="cursor-pointer"
                    >
                      <h4 className="font-poppins text-lg font-semibold text-gray-600 -mb-6">
                        {work?.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <p className="font-karla text-md text-gray-600">
                          {work?.company}
                        </p>
                        <i
                          className={`ci ci-${work?.icon} ci-${work?.size} ${
                            work?.icon === "ringcentral" ? "mb-0.5" : ""
                          }`}
                        />
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
