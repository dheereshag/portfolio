"use client";
import { useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { menuItems } from "../../constants";
import { useMenuAnimation } from "../../hooks";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <div className="fixed z-20">
      <a href="#home">
        <img src="./logo.png" alt="logo" className="m-3 w-14" />
      </a>
      <div ref={scope}>
        <nav
          className={`fixed bg-zinc-900/90 top-0 bottom-0 right-0 w-80 backdrop-blur-md ${
            isOpen ? "" : "translate-x-full transform-gpu"
          }`}
        >
          <MenuItems menuItems={menuItems} toggleMenu={toggleMenu} />
        </nav>
        <MenuToggle toggle={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
