import { motion } from "framer-motion";

const items = [
  { name: "next", iconStyle: "md" },
  { name: "node", iconStyle: "md" },
  { name: "spring", iconStyle: "md" },
  { name: "all" },
];
const ProjectTabs = ({ activeFilter, handleWorkFilter }) => {
  return (
    <section className="gap-6 flex flex-wrap justify-center">
      {items.map((item, index) => (
        <motion.button
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`px-5 py-3 font-sora font-semibold text-sm text-zinc-300 ${
            activeFilter === item
              ? "rounded-none bg-black"
              : "rounded-xl bg-zinc-800"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex items-center gap-1">
            <span>{item.name}</span>
            {item.name !== "all" && (
              <i className={`ci ci-${item.name} ci-${item.iconStyle}`}></i>
            )}
          </div>
        </motion.button>
      ))}
    </section>
  );
};

export default ProjectTabs;
