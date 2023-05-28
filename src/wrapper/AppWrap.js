import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`app__container ${classNames} min-h-screen flex`}
      >
        <SocialMedia
          parentStyles={"flex-col justify-end gap-4 m-3 hidden md:flex"}
          childStyles={
            "hvr-icon-grow-rotate bg-white rounded-full w-14 h-14 border app__flex shadow"
          }
          iconStyles={"ci-xl"}
        />
        <div className="flex flex-1 m-10 relative items-center justify-center">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
