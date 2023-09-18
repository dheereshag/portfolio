const ProjectInfo = ({ project }) => {
  return (
    <div className="flex relative mt-2">
      <aside className="flex flex-col gap-2">
        <h4 className="font-sora font-semibold text-white">{project?.name}</h4>
        <p className="font-dm-sans break-words text-sm text-zinc-300">
          {project?.description}
        </p>
      </aside>
    </div>
  );
};

export default ProjectInfo;
