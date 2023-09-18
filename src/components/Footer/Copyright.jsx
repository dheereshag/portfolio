import { useState } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useAnimateCount } from "../../hooks";
const Copyright = () => {
  const count = useMotionValue(2000);
  const rounded = useTransform(count, Math.round);
  const [isInView, setIsInView] = useState(false);

  useAnimateCount(count, isInView);
  return (
    <aside>
      <div className="flex items-baseline ">
        <p className="font-pacifico text-white">@</p>
        <motion.p
          onViewportEnter={() => setIsInView(true)}
          className="font-pacifico text-white"
        >
          {rounded}
        </motion.p>
        <p className="ml-1 font-dancing-script text-zinc-300">Dheeresh</p>
      </div>
      <p className="font-dancing-script text-zinc-300">All rights reserved</p>
    </aside>
  );
};

export default Copyright;
