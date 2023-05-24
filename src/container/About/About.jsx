import React, { useState, useEffect } from "react";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
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
          <div
            className="app__profile-item hvr-forward"
            key={skill.title + index}
          >
            <img src={urlFor(skill.image)} alt={skill.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {skill.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {skill.description}
            </p>
          </div>
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
