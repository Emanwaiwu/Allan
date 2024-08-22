import React from "react";
import Menu from "../components/Menu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div className="border-b border-[#ffffffa0] solid h-[40px] flex items-center">
        <p className="text-[#a50104] font-title text-[23px] cursor-pointer w-[360px] min-w-[300px] pl-2">
          ALLAN HACKERMAN
        </p>
        <div className="lg:hidden md:hidden flex w-screen justify-end absolute">
          <Menu
            textColor="#ffffff"
            linkHoverColor="#A50104"
            iconHoverColor="#ffffff"
          />
        </div>
        <div className="flex gap-10 w-screen justify-end sm:hidden pr-2">
          <p className="text-[#ffffff] ml-5 font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer">
            <a href="/">PORTFOLIO</a>
          </p>
          <p className="text-[#ffffff] font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer">
            <a href="/about">ABOUT ME</a>
          </p>
          <p className="text-[#A50104] font-title text-[18px] hover:text-[#ffffff] ease-in-out duration-300 cursor-pointer">
            <a href="/contact">CONTACT ME</a>
          </p>
        </div>
      </div>
      <div className="max-w-[1440px] h-fit">
        <h1 className="font-main text-[#F7F7F2] text-[70px] text-center sm:text-[40px]">
          I’d Love to Hear from <span className="italic">You!</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center h-[75vh] gap-[100px] pb-[4rem]">
        <div className="w-[50vw] border-b border-[#F7F7F2]">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name:"
            className="bg-transparent placeholder:text-[#F7F7F2] placeholder:italic placeholder:font-title w-full text-white font-title"
          />
        </div>
        <div className="w-[50vw] border-b border-[#F7F7F2]">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Email:"
            className="bg-transparent placeholder:text-[#F7F7F2] placeholder:italic placeholder:font-title w-full text-white font-title"
          />
        </div>
        <div className="w-[50vw] border-b border-[#F7F7F2]">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Subject:"
            className="bg-transparent placeholder:text-[#F7F7F2] placeholder:italic placeholder:font-title w-full text-white font-title"
          />
        </div>
        <div className="w-[50vw] border-b border-[#F7F7F2]">
          <input
            type=""
            name="name"
            id=""
            placeholder="Message:"
            className="bg-transparent placeholder:text-[#F7F7F2] placeholder:italic placeholder:font-title w-full text-white font-title"
          />
        </div>
      </div>
      <div className="border-t border-[#ffffff] solid h-[40px] flex items-center mt-auto">
        <p className="text-[#F7F7F2] font-medium font-title text-[18px] cursor-pointer w-[360px] min-w-[300px] pl-2">
          1234 ROYAL ST LOS ANGELES CA
        </p>
        <div className="flex justify-center w-[6000px] sm:hidden">
          <p className="font-title font-medium text-[#F7F7F2]">
            ALLANHMAN@GMAIL.COM
          </p>
        </div>
        <div className="flex gap-5 w-screen justify-end sm:hidden pr-10">
          <FaInstagram className="text-[#F7F7F2] ml-5 font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer" />
          <FaXTwitter className="text-[#F7F7F2] font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer" />
          <FaPhoneFlip className="text-[#F7F7F2] font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
