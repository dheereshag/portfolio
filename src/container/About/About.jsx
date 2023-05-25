import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const About = () => {
  const [skills, setSkills] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="">
        I know that <span>Good Apps</span>
        <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {skills.map((skill, index) => (
          <motion.div
            className="app__profile-item hvr-forward"
            key={skill.title + index}
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <img
              src={urlFor(skill.image)}
              alt={skill.title}
              onLoad={() => setIsLoaded(true)}
            />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {skill.title}
            </h2>
            <p className="" style={{ marginTop: 10 }}>
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__white-bg"
);
