"use client";
import React, { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { menuItems } from "../../constants";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);

  return scope;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);
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
          <ul className="flex flex-col gap-10 mt-40 mx-20">
            {menuItems.map((item, index) => (
              <a href={`#${item}`} key={index}>
                <li
                  className="text-white  text-3xl font-bold cursor-pointer font-poppins"
                  onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
                >
                  {item}
                </li>
              </a>
            ))}
            {/* button to view CV */}
            <a
              href="https://drive.google.com/file/d/1B32Dcsmr-1fQStcyyvHlbJ0RCNBjdOx0/view?usp=sharing"
              className="hvr-shrink"
              target="_blank"
              rel="noreferrer"
            >
              <li className="bg-black text-white mt-4 text-2xl transform-gpu font-bold py-2 px-4 hover:rounded-full w-8/12 font-poppins flex items-center justify-between">
                <span>CV</span>
                <i className="fa-solid fa-eye text-white"></i>
              </li>
            </a>
          </ul>
        </nav>
        <MenuToggle toggle={() => setIsOpen((prevIsOpen) => !prevIsOpen)} />
      </div>
    </div>
  );
};

export default Navbar;
