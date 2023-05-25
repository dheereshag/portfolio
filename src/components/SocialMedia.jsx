import React from "react";
const SocialMedia = ({ classStyles }) => {
  return (
    <div className={classStyles}>
      <a href="" className="hvr-grow-rotate">
        <i className="ci ci-github"></i>
      </a>
      <a href="" className="hvr-grow-rotate">
        <i className="ci ci-linkedin"></i>
      </a>
      <a href="" className="hvr-grow-rotate">
        <i className="ci ci-leetcode"></i>
      </a>
      <a href="" className="hvr-grow-rotate">
        <i className="ci ci-discord"></i>
      </a>
    </div>
  );
};

export default SocialMedia;
