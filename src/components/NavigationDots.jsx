import React from "react";
import { menuItems } from "../constants";

const NavigationDots = ({ active }) => {
  return (
    <div className="hidden md:flex md:justify-center md:flex-col p-4 gap-4">
      {menuItems.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-500 transition-all 2xl:w-2.5 2xl:h-2.5"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        >
          {" "}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
