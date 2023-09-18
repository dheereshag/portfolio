import { useEffect } from "react";
import { animate } from "framer-motion";

const useAnimateCount = (count, isInView) => {
  useEffect(() => {
    if (!isInView) return;
    const animation = animate(count, 2023, { duration: 6 });
    return animation.stop;
  }, [count, isInView]);
};

export default useAnimateCount;
