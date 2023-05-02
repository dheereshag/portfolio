import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
const About = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Apps</span>
        <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {skills.map((skill, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={skill.title + index}
          >
            <img src={urlFor(skill.image)} alt={skill.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {skill.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
