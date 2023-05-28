import React, { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isHeaderInView, setIsHeaderInView] = useState(false);
  const [isProjectsInView, setIsProjectsInView] = useState(false);
  const [isSkillsInView, setIsSkillsInView] = useState(false);
  const [isContactInView, setIsContactInView] = useState(false);
  const isXL = useMediaQuery({ minWidth: 1280 });
  return (
    <AppContext.Provider
      value={{
        isHeaderInView,
        setIsHeaderInView,
        isXL,
        isProjectsInView,
        setIsProjectsInView,
        isSkillsInView,
        setIsSkillsInView,
        isContactInView,
        setIsContactInView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
