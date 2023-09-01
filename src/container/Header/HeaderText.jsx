import Typewriter from "./Typewriter";
import { motion } from "framer-motion";
const HeaderText = () => {
  return (
    <div>
      <h1 className="text-4xl mb-2 font-extrabold">
        <Typewriter
          text={"I'm Dheeresh. I am a web developer."}
          speed={0.03}
          delay={0}
        />
      </h1>
      <motion.div
        className="text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3, type: "tween" }}
      >
        Hi, I'm a software developer with a passion for technology and
        innovation. I studied at <i class="fa-solid fa-graduation-cap"></i> IIT
        Bhubaneswar, where I learned coding and landed a job at{" "}
        <i class="fa-solid fa-briefcase" /> RingCentral on day 0. Although I got
        impacted by layoffs during the recession, I didn't let that stop me.
        Instead, I taught myself <i class="fa-solid fa-cogs"></i> devops{" "}
        <i class="ci ci-docker ci-lg" />
        <i class="ci ci-kubernetes ci-lg" /> and aws{" "}
        <i class="ci ci-aws-light ci-lg" /> in depth. I have expertise in
        next.js <i className="ci ci-next ci-lg" /> in frontend and spring boot{" "}
        <i className="ci ci-spring ci-lg" /> , django{" "}
        <i className="ci ci-django ci-lg" /> and nodejs{" "}
        <i className="ci ci-node ci-lg" /> in backend. I'm always looking for{" "}
        <i class="fa-solid fa-trophy"></i> new challenges and opportunities to
        grow and make a difference in the world of technology.{" "}
      </motion.div>
    </div>
  );
};

export default HeaderText;
