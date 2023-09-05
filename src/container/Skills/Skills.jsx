"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import groupByStartYear from "../../utils/groupByStartYear";
const Skills = () => {
  const [groupedWorks, setGroupedWorks] = useState([]);

  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await fetch(
          "https://dheereshagrwal-portfolio-backend.up.railway.app/skills"
        );
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    }

    fetchSkills();
  }, []);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const response = await fetch(
          "https://dheereshagrwal-portfolio-backend.up.railway.app/works"
        );
        const data = await response.json();
        const groupedWorks = groupByStartYear(data);
        setGroupedWorks(groupedWorks);
      } catch (error) {
        console.error("Error fetching works data:", error);
      }
    }

    fetchWorks();
  }, []);

  return (
    <div className="flex flex-col gap-10 lg:gap-20 lg:mt-6 mt-10 xl:mt-0">
      <h2 className="font-dm-sans text-4xl xl:text-5xl font-semibold text-zinc-300 text-center leading-tight">
        Skills <span className="text-zinc-500">&</span> Experiences
      </h2>
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-28 items-center lg:items-start">
        <motion.div className="flex flex-wrap justify-center gap-7 xl:w-7/12">
          {skills.map((skill, index) => (
            <motion.div className="flex flex-col text-center gap-2" key={index}>
              <motion.div className="tw-box-shadow-inset transform-gpu group app__flex rounded-3xl md:w-24 md:h-24 w-20 h-20">
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

        <div className="flex flex-col gap-5 mt-1.5 xl:w-4/12">
          {Object.entries(groupedWorks)
            .sort(([yearA], [yearB]) => yearB - yearA)
            .map(([year, works]) => (
              <div className="flex gap-16 items-baseline" key={year}>
                <p className="font-bold text-white font-poppins text-lg">
                  {year}
                </p>
                <div>
                  {works
                    .sort((workA, workB) => workB.id - workA.id)
                    .map((work) => (
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        key={work.id}
                      >
                        <h4 className="font-sora text-zinc-300 -mb-6">
                          {work?.role} {work?.duration}
                        </h4>
                        <div className="flex items-center gap-2">
                          <p className="font-sora text-white text-lg font-semibold">
                            {work?.companyName}
                          </p>
                          <i
                            className={`ci ci-${work?.companyIcon.iconName} ci-${work?.companyIcon.iconStyle}`}
                          />
                        </div>
                      </motion.div>
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
