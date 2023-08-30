"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { skills } from "../../constants";
const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    client.fetch(query).then((data) => {
      const sortedExperiences = data.sort((a, b) => b?.year - a?.year);
      setExperiences(sortedExperiences);
    });
  }, []);

  return (
    <div className="flex flex-col gap-10 lg:gap-20 lg:mt-6 mt-10 xl:mt-0">
      <h2 className="font-dm-sans text-4xl xl:text-5xl font-semibold text-white text-center leading-tight">
        Skills <span className="text-cyan-400">&</span> Experiences
      </h2>
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-28 items-center lg:items-start">
        <motion.div className="flex flex-wrap justify-center gap-7 xl:w-8/12">
          {skills.map((skill, index) => (
            <motion.div className="flex flex-col text-center gap-2" key={index}>
              <motion.div className="tw-box-shadow-inset transform-gpu group app__flex bg-blue-100 shadow border rounded-3xl md:w-24 md:h-24 w-20 h-20">
                <i
                  className={`ci ci-${skill.icon} ci-${skill.size} w-8/12 md:w-full group-hover:tw-buzz`}
                ></i>
              </motion.div>
              <p className="font-poppins text-sm font-semibold text-white">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-col gap-5 xl:w-4/12">
          {experiences?.map((experience) => (
            <div className="flex gap-16 items-baseline" key={experience?.year}>
              <p className="font-bold text-green-400 font-poppins text-lg">
                {experience?.year}
              </p>
              <div>
                {experience?.works?.map((work, index) => (
                  <div key={`${work.name}-${index}`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="font-poppins text-lg font-semibold text-cyan-500 -mb-6">
                        {work?.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <p className="font-karla text-md text-white">
                          {work?.company}
                        </p>
                        <i className={`ci ci-${work?.icon} ci-${work?.size}` } />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Skills, "skills"), "skills", "bg-zinc-900");
