"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    client.fetch(query).then((data) => {
      const sortedExperiences = data.sort((a, b) => b?.year - a?.year);
      console.log("sortedExperiences", sortedExperiences);
      setExperiences(sortedExperiences);
    });
  }, []);

  useEffect(() => {
    async function fetchSkillData() {
      try {
        const response = await fetch("http://18.222.249.158:8080/skills");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSkills(data);
        console.log("skills", data);
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    }

    fetchSkillData();
  }, []);

  return (
    <div className="flex flex-col gap-10 lg:gap-20 lg:mt-6 mt-10 xl:mt-0">
      <h2 className="font-dm-sans text-4xl xl:text-5xl font-semibold text-zinc-300 text-center leading-tight">
        Skills <span className="text-zinc-500">&</span> Experiences
      </h2>
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-28 items-center lg:items-start">
        <motion.div className="flex flex-wrap justify-center gap-7 xl:w-8/12">
          {skills.map((skill, index) => (
            <motion.div className="flex flex-col text-center gap-2" key={index}>
              <motion.div className="tw-box-shadow-inset transform-gpu group app__flex bg-zinc-800 shadow rounded-3xl md:w-24 md:h-24 w-20 h-20">
                <i
                  className={`ci ci-${skill.icon.iconName} ci-${skill.icon.iconStyle} w-8/12 md:w-full group-hover:tw-buzz`}
                ></i>
              </motion.div>
              <p className="font-sora font-semibold text-zinc-300 text-sm">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-col gap-5 xl:w-4/12">
          {experiences?.map((experience) => (
            <div className="flex gap-16 items-baseline" key={experience?.year}>
              <p className="font-bold text-white font-poppins text-lg">
                {experience?.year}
              </p>
              <div>
                {experience?.works?.map((work, index) => (
                  <div key={`${work.name}-${index}`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="font-poppins text-lg font-semibold text-zinc-300 -mb-6">
                        {work?.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <p className="font-sora text-md text-white">
                          {work?.company}
                        </p>
                        {console.log("work", work)}
                        <i className={`ci ci-${work?.icon} ci-${work?.size}`} />
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
