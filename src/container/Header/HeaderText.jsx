import Typewriter from "./Typewriter";
import { motion } from "framer-motion";
const HeaderText = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl mb-4 font-extrabold">
        <Typewriter
          text={"I'm Dheeresh. I am a Web Developer."}
          speed={0.03}
          delay={0}
        />
      </h1>
      <motion.div
        className="text-base md:text-lg flex flex-col gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3, type: "tween" }}
      >
        <p>
          Hi, I'm a software developer with a passion for technology and
          innovation. I studied at <i className="fa-solid fa-graduation-cap"></i>{" "}
          IIT Bhubaneswar, where I learned coding and landed a job at{" "}
          <i className="fa-solid fa-briefcase fa-sm" /> RingCentral on day 0.
        </p>
        <p>
          Although I got impacted by layoffs during the recession, I didn't let
          that get into me. Instead, I kept upskilling and taught myself{" "}
          <i className="fa-solid fa-cogs" /> devops tools like{" "}
          <i className="ci ci-docker ci-sm" /> docker,{" "}
          <i className="ci ci-kubernetes ci-sm" /> kubernetes, and{" "}
          <i className="ci ci-aws-light ci-sm" /> aws in depth to deploy containerized applications.
        </p>
        <p>
          Then I started working as an Independent Contractor and also made several
          projects and including an open-source project of colored icons that
          has over 55 github <i className="fas fa-star fa-xs text-yellow-500" /> stars.
        </p>
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
