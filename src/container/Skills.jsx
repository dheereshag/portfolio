"use client";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import { useFetchSkills, useFetchWorks } from "../hooks";
import { Skill, Work } from "../components/Skills";
const Skills = () => {
  const skills = useFetchSkills();
  const groupedWorks = useFetchWorks();

  return (
    <div className="flex flex-col gap-10 lg:gap-20 mt-10">
      <h2 className="font-dm-sans text-3xl md:text-4xl xl:text-5xl font-semibold text-zinc-300 text-center leading-tight">
        Skills <span className="text-zinc-500">&</span> Experiences
      </h2>
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-28 items-center lg:items-start">
        <motion.div className="flex flex-wrap justify-center gap-6 xl:w-7/12">
          {skills.map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
        </motion.div>

        <div className="flex flex-col gap-14 mt-1.5 xl:w-4/12">
          {Object.entries(groupedWorks)
            .sort(([yearA], [yearB]) => yearB - yearA)
            .map(([year, works]) => (
              <div className="flex gap-6 md:gap-16 items-baseline" key={year}>
                <p className="font-bold text-white text-sm font-poppins md:text-lg">
                  {year}
                </p>
                <div className="flex flex-col gap-8">
                  {works
                    .sort((workA, workB) => workB.id - workA.id)
                    .map((work) => (
                      <Work work={work} key={work.id} />
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
