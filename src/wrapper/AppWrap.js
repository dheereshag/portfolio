import React from "react";
import { NavigationDots, SocialMedia, Footer } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia classStyles={"flex flex-col justify-end p-4 gap-2"} />
        <div className="app__wrapper app__flex">
          <Component />
          <Footer />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
