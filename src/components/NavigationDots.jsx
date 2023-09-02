import { menuItems } from "../constants";
const NavigationDots = ({ active }) => {
  return (
    <div
      className={`hidden md:flex md:justify-center md:flex-col p-4 gap-4`}
    >
      {menuItems.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className={`w-2 h-2 rounded-full hover:bg-zinc-300 transition-all 2xl:w-2.5 2xl:h-2.5 ${
            active === item ? "bg-white" : "bg-zinc-700"
          }`}
        >
          {" "}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
