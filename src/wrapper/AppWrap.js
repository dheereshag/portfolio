import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`${classNames} min-h-screen flex`}
      >
        <SocialMedia
          parentStyles={"flex-col justify-end gap-4 m-3 hidden md:flex"}
          childStyles={
            "bg-white rounded-full w-12 h-12 border app__flex shadow"
          }
          iconStyles={
            "ci-xl transition-transform duration-300 transform-gpu group-hover:scale-125 group-hover:rotate-12"
          }
        />
        <div className="flex flex-1 m-10 relative items-center justify-center">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
