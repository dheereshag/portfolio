import React, { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isHeaderInView, setIsHeaderInView] = useState(false);
  const isXL = useMediaQuery({ minWidth: 1280 });
  return (
    <AppContext.Provider
      value={{
        isHeaderInView,
        setIsHeaderInView,
        isXL,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
