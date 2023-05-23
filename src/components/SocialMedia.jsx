import React from "react";
import { SiDiscord, SiTwitter, SiInstagram } from "react-icons/si";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="hvr-grow-rotate">
        <SiTwitter />
      </div>
      <div className="hvr-grow-rotate">
        <SiDiscord />
      </div>
      <div className="hvr-grow-rotate">
        <SiInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
