"use client";
import { socialIcons } from "../../constants";
import { SocialIcon } from ".";
const Socials = () => {
  return (
    <div className="flex gap-3">
      {socialIcons.map((icon) => (
        <SocialIcon icon={icon} key={icon.name} />
      ))}
    </div>
  );
};

export default Socials;
