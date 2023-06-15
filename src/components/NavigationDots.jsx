import React, { useContext } from "react";
import { menuItems } from "../constants";
import { AppContext } from "../context/AppContext";
const NavigationDots = ({ active }) => {
  const { isHeaderInView, isXL } = useContext(AppContext);
  const shouldRender = isXL && isHeaderInView;
  return (
    <div
      className={`hidden md:flex md:justify-center md:flex-col p-4 gap-4 ${
        shouldRender ? "invisible" : ""
      }`}
    >
      {menuItems.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className={`w-2 h-2 rounded-full hover:bg-gray-500 transition-all 2xl:w-2.5 2xl:h-2.5 ${
            active === item ? "bg-violet-800" : "bg-gray-400"
          }`}
        >
          {" "}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
