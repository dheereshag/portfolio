import React from "react";
import { SiDiscord, SiTwitter, SiInstagram } from "react-icons/si";
const SocialMedia = ({ classStyles }) => {
  return (
    <div className={classStyles}>
      <SiTwitter className="hvr-grow-rotate" />
      <SiDiscord className="hvr-grow-rotate" />
      <SiInstagram className="hvr-grow-rotate" />
    </div>
  );
};

export default SocialMedia;
