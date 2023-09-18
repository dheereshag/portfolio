import { motion } from "framer-motion";
import { useFetchSkills } from "../../hooks";
import { SkillBox } from ".";
const SkillsGrid = () => {
  const skills = useFetchSkills();
  return (
    <motion.div className="flex flex-wrap justify-center gap-6 xl:w-7/12">
      {skills.map((skill, index) => (
        <SkillBox skill={skill} key={index} />
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
