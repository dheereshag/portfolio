"use client";
import { AppWrap, MotionWrap } from "../wrapper";
import { SkillsGrid } from "../components/Skills";
import { Works } from "../components/Experiences";
const Skills = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-20 mt-10">
      <h2 className="font-dm-sans text-3xl md:text-4xl xl:text-5xl font-semibold text-zinc-300 text-center leading-tight">
        Skills <span className="text-zinc-500">&</span> Experiences
      </h2>
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-28 items-center lg:items-start">
        <SkillsGrid />
        <Works />
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Skills, "skills"), "skills", "bg-zinc-900");
