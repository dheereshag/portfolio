import { motion } from "framer-motion";

const Skill = ({ skill }) => (
  <motion.div className="flex flex-col text-center gap-2">
    <motion.div className="tw-box-shadow-inset transform-gpu group app__flex rounded-3xl md:w-24 md:h-24 w-20 h-20">
      <i
        className={`ci ci-${skill.icon.iconName} ci-${skill.icon.iconStyle} group-hover:tw-buzz`}
      ></i>
    </motion.div>
    <p className="font-sora font-semibold text-zinc-300 text-sm">
      {skill.name}
    </p>
  </motion.div>
);

export default Skill;
