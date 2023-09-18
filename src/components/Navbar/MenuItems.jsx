const MenuItems = ({ menuItems, toggleMenu }) => {
  return (
    <ul className="flex flex-col gap-10 mt-40 mx-20">
      {menuItems.map((item, index) => (
        <a href={`#${item}`} key={index}>
          <li
            className="text-white  text-3xl font-bold cursor-pointer font-poppins"
            onClick={toggleMenu}
          >
            {item}
          </li>
        </a>
      ))}
    </ul>
  );
};

export default MenuItems;
