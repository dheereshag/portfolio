import { useEffect } from "react";
import { animate } from "framer-motion";

const useAnimateCount = (count, isInView) => {
  useEffect(() => {
    if (!isInView) return;
    const currentYear = new Date().getFullYear();
    const animation = animate(count, currentYear, { duration: 6 });
    return animation.stop;
  }, [count, isInView]);
};

export default useAnimateCount;
