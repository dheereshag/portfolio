import { motion } from "framer-motion";
import { ProjectLinks, ProjectTechStacks, ProjectInfo, ProjectImage } from ".";
const ProjectCards = ({
  animateCard,
  filterProjects,
  isImageLoading,
  setIsImageLoading,
}) => {
  return (
    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, type: "tween" }}
      className="flex flex-wrap justify-center gap-8 lg:gap-14"
    >
      {filterProjects.map((project, index) => {
        return (
          <motion.div
            className="hvr-grow-shadow md:w-96 p-3 bg-zinc-800 rounded-3xl"
            key={`${project.name}`}
          >
            <div className="flex relative">
              <ProjectImage
                project={project}
                isImageLoading={isImageLoading}
                setIsImageLoading={setIsImageLoading}
              />
              <ProjectLinks project={project} />
            </div>
            <div className="flex justify-center py-1 relative">
              <ProjectTechStacks project={project} />
              <ProjectInfo project={project} />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ProjectCards;
