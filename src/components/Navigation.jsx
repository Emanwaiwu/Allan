import React from "react";
import Menu from "../components/Menu";

const Navigation = () => {
  return (
    <div>
      <div className="border-b border-[#ffffffa0] solid h-[40px] flex items-center">
        <p className="text-[#a50104] font-title text-[23px] cursor-pointer w-[360px] min-w-[300px] pl-2">
          ALLAN HACKERMAN
        </p>
        <div className="lg:hidden md:hidden flex w-screen justify-end absolute">
          <Menu />
        </div>
        <div className="flex gap-10 w-screen justify-end sm:hidden pr-2">
          <p className="text-[#A50104] ml-5 font-title text-[18px] hover:text-[#ffffff] ease-in-out duration-300 cursor-pointer">
            <a href="/">PORTFOLIO</a>
          </p>
          <p className="text-[#ffffff] font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer">
            <a href="/about">ABOUT ME</a>
          </p>
          <p className="text-[#ffffff] font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer">
            <a href="/contact">CONTACT ME</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
