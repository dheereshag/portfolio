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
            className="hvr-grow-rotate"
          >
            <i className={`ci ci-${icon.name} ci-xl`}></i>
          </a>
        ))}
      </div>
  );
};

export default SocialMedia;
