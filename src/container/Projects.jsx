"use client";
import { useState } from "react";
import { AppWrap, MotionWrap } from "../wrapper";
import { useFetchProjects } from "../hooks";
import { ProjectTabs, ProjectCards } from "../components/Projects";

const Projects = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const {
    activeFilter,
    filterProjects,
    isLoading,
    handleWorkFilter,
    animateCard,
  } = useFetchProjects();

  return (
    <div className="flex flex-col gap-10 md:gap-16 items-center mt-10">
      <h2 className="font-dm-sans text-3xl md:text-4xl xl:text-5xl font-semibold text-zinc-400 text-center leading-tight">
        My <span className="text-white">Projects</span> section
      </h2>
      {isLoading ? (
        <div className="text-white">Loading...</div>
      ) : (
        <div className="flex flex-col items-center gap-10 xl:gap-16">
          <ProjectTabs
            activeFilter={activeFilter}
            handleWorkFilter={handleWorkFilter}
          />

          <ProjectCards
            animateCard={animateCard}
            filterProjects={filterProjects}
            isImageLoading={isImageLoading}
            setIsImageLoading={setIsImageLoading}
          />
        </div>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Projects, "projects"),
  "projects",
  "bg-zinc-900"
);
