const ProjectTechStacks = ({ project }) => {
  return (
    <div className="flex items-center px-2 py-2 -top-5 bg-zinc-800 rounded-xl absolute">
      <div className="flex items-center gap-1.5">
        {project?.techStacks?.map((techStack) => (
          <i
            className={`ci ci-${techStack?.icon?.iconName} ci-${techStack?.icon?.iconStyle}`}
          ></i>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechStacks;
