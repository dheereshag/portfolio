import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isHeaderInView, setIsHeaderInView] = useState(false);

  return (
    <AppContext.Provider value={{ isHeaderInView, setIsHeaderInView }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
