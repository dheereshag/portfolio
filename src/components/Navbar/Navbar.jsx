import React, { useState, useEffect } from "react";
import "./Navbar.scss";
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
    <nav className="fixed z-10">
      <div ref={scope}>
        <nav className="fixed bg-pink-50 top-0 bottom-0 right-0 w-80">
          <ul className="flex flex-col gap-10 mt-32 ml-20">
            {menuItems.map((item, index) => (
              <a
                key={index}
                className="text-purple-800 text-2xl font-bold cursor-pointer font-poppins"
                href={`#${item}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {item}
              </a>
            ))}
          </ul>
        </nav>
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </div>
    </nav>
  );
};

export default Navbar;
