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
        <p>
          Hi, I'm a software developer with a passion for technology and
          innovation. I studied at <i class="fa-solid fa-graduation-cap"></i>{" "}
          IIT Bhubaneswar, where I learned coding and landed a job at{" "}
          <i class="fa-solid fa-briefcase fa-sm" /> RingCentral on day 0.
        </p>
        <br />
        <p>
          Although I got impacted by layoffs during the recession, I didn't let
          that stop me. Instead, I taught myself{" "}
          <i className="fa-solid fa-cogs" /> devops tools like{" "}
          <i className="ci ci-docker ci-sm" /> docker,{" "}
          <i className="ci ci-kubernetes ci-sm" /> kubernetes, and{" "}
          <i className="ci ci-aws-light ci-sm" /> aws in depth.
        </p>
        <br />
        <p>
          I currently work with <i className="ci ci-next ci-sm" /> nextjs, for
          frontend and <i className="ci ci-nodejs ci-sm" /> nodejs,{" "}
          <i className="ci ci-django ci-sm" /> django,{" "}
          <i className="ci ci-spring ci-sm" /> spring boot for backend with both
          NoSQL and SQL <i className="fa-solid fa-database fa-xs" /> databases.
        </p>
      </motion.div>
    </div>
  );
};

export default HeaderText;
