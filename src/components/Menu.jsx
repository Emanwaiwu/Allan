import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Menu = ({ textColor, linkHoverColor, iconHoverColor }) => {
  const [isclicked, setisClicked] = useState(false);

  const toggleMenu = () => {
    setisClicked(!isclicked);
  };

  return (
    <div className="">
      <nav
        className={`fixed top-0 right-0 w-full h-full bg-transparent backdrop-blur-lg transition-transform transform ${
          isclicked ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300 z-50`}
      >
        <div
          className="absolute top-4 right-4 cursor-pointer text-[#A50104] text-3xl hover:text-[#ffffff]"
          onClick={toggleMenu}
        >
          <IoCloseOutline
            className={`hover:text-[${iconHoverColor}] ease-in-out duration-300`}
          />
        </div>
        <ul className="flex flex-col font-bold items-center justify-center h-full gap-10 text-white">
          <li
            className={`text-[50px] font-title cursor-pointer border-b border-black pb-5 hover:text-[#A50104]`}
            style={{ color: textColor }}
          >
            <a
              href="/"
              className={`hover:text-[${linkHoverColor}] ease-in-out duration-300`}
            >
              Portfolio
            </a>
          </li>
          <li
            className={`text-[50px] font-bold font-title cursor-pointer border-b border-black pb-5 hover:text-[#A50104]`}
            style={{ color: textColor }}
          >
            <a
              href="/about"
              className={`hover:text-[${linkHoverColor}] ease-in-out duration-300`}
            >
              About me
            </a>
          </li>
          <li
            className={`text-[50px] font-bold font-title cursor-pointer hover:text-[#A50104]`}
            style={{ color: textColor }}
          >
            <a
              href="/contact"
              className={`hover:text-[${linkHoverColor}] ease-in-out duration-300`}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`cursor-pointer text-[#A50104] text-3xl z-50 ${
          isclicked ? "hidden" : ""
        } hover:text-[#ffffff]`}
        onClick={toggleMenu}
      >
        <CiMenuBurger
          className={`hover:text-[${iconHoverColor}] ease-in-out duration-300`}
        />
      </div>
    </div>
  );
};

export default Menu;
