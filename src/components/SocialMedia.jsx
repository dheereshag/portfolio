import React from "react";
import { socialIcons } from "../constants";

const SocialMedia = ({ classStyles }) => {
  return (
      <div className={`${classStyles}`}>
        {socialIcons.map((icon) => (
          <a
            key={icon.name}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hvr-icon-grow-rotate bg-white rounded-full w-14 h-14 border app__flex shadow"
          >
            <i className={`ci ci-${icon.name} ci-xl hvr-icon`}></i>
          </a>
        ))}
      </div>
  );
};

export default SocialMedia;
