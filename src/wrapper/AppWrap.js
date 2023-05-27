import React from "react";
import { NavigationDots, SocialMedia, Footer } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`app__container ${classNames} min-h-screen flex`}
      >
        <SocialMedia
          classStyles={"flex-col justify-end gap-4 m-3 hidden md:flex"}
        />
        <div className="flex-1 mt-12">
          <Component />
          <Footer />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
