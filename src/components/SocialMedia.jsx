import React from "react";
import { socialIcons } from "../constants";

const SocialMedia = ({ parentStyles,childStyles,iconStyles }) => {
  return (
    <div className={`${parentStyles}`}>
      {socialIcons.map((icon) => (
        <a
          key={icon.name}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${childStyles} animate__animated animate__rollIn  animate__delay-1s animate__slower`}
        >
          <i className={`ci ci-${icon.name} ${iconStyles} hvr-icon`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
