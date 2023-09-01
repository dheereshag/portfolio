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
        <i class="fa-solid fa-briefcase"></i> RingCentral on day 0. Although I
        was later laid off, I didn't let that stop me. Instead, I taught myself{" "}
        <i class="fa-solid fa-cogs"></i> devops and other skills in depth, and
        now I'm a <i class="fa-solid fa-code"></i> fullstack developer with
        expertise in next js in frontend and spring boot, django and nodejs in
        backend. I also have knowledge of devops and aws. I'm always looking for{" "}
        <i class="fa-solid fa-trophy"></i> new challenges and opportunities to
        grow and make a difference in the world of technology.{" "}
      </motion.div>
    </div>
  );
};

export default HeaderText;
