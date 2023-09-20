const ProjectImage = ({ project, isImageLoading, setIsImageLoading }) => {
  return (
    <img
      src={isImageLoading ? "blur.jpg" : project.imageUri}
      alt={project.name}
      className={`object-contain rounded-xl transition-all transform-gpu ${
        isImageLoading ? "blur" : "blur-0"
      }`}
      onLoad={() => setIsImageLoading(false)}
    />
  );
};

export default ProjectImage;
