import React from "react";
import Menu from "../components/Menu";
import profile from "../images/Profile.png";
import about from "../images/about.png";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F2]">
      <div className="border-b border-[#000000] solid h-[40px] flex items-center">
        <p className="text-[#a50104] font-title text-[23px] cursor-pointer w-[360px] min-w-[300px] pl-2">
          ALLAN HACKERMAN
        </p>
        <div className="lg:hidden md:hidden flex w-screen justify-end absolute">
          <Menu
            textColor="#000000"
            linkHoverColor="#A50104"
            iconHoverColor="#000000"
          />
        </div>
        <div className="flex gap-10 w-screen justify-end sm:hidden pr-2">
          <p className="text-[#000000] ml-5 font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer">
            <a href="/">PORTFOLIO</a>
          </p>
          <p className="text-[#A50104] font-title text-[18px] hover:text-[#000000] ease-in-out duration-300 cursor-pointer">
            <a href="/about">ABOUT ME</a>
          </p>
          <p className="text-[#000000] font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer">
            <a href="/contact">CONTACT ME</a>
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="max-w-[1440px] h-fit">
          <h1 className="font-main text-[70px] text-center sm:text-[40px]">
            The Storyteller Behind the Camera: Meet{" "}
            <span className="italic">Allan Hackerman</span>
          </h1>
        </div>
      </div>

      <div className="justify-center flex mt-3 h-auto items-center">
        <div className="grid grid-cols-12 w-[90vw] gap-y-4 max-w-[1440px]">
          <div className="col-span-4 flex justify-center items-start">
            <img
              src={profile}
              alt=""
              className="w-[240px] h-auto object-contain border border-black"
            />
          </div>
          <div className="col-span-8 items-start flex sm:ml-5 md:ml-5">
            <p className="text-[20px] font-main sm:text-[10px] md:text-[15px]">
              I’m Allan Hackerman, and I’ve been in love with photography ever
              since I can remember. It all started when I was a kid, messing
              around with my dad’s old camera, trying to capture anything that
              caught my eye. Over time, that curiosity turned into a full-blown
              passion, and now I’m lucky enough to call it my career.
              Photography, for me, is more than just taking pictures—it’s about
              freezing those special moments in time, the ones you’ll want to
              look back on years from now. Whether it’s the quiet smiles at a
              wedding, the raw beauty of nature, or the buzz of a big event, I’m
              all about capturing the real, unscripted moments that tell a
              story.
            </p>
          </div>
          <div className="col-span-8 flex items-start mr-5">
            <p className="text-[20px] font-main sm:text-[10px] md:text-[15px]">
              I’ve spent years refining my skills, but what drives me is the
              connection I make with the people I photograph. I want to make you
              feel comfortable, so the real you shines through in every shot.
              I’m not just a photographer—I’m a storyteller, and I believe that
              every photo should reflect who you are and what’s important to
              you. When I’m not out with my camera, you’ll probably find me
              exploring new places, hanging out with friends, or just enjoying
              some good music. I’m always looking for new inspiration and love
              the way photography lets me see the world differently.
            </p>
          </div>
          <div className="col-span-3 flex justify-center items-end pb-2 sm:items-start">
            <img
              src={about}
              alt=""
              className="w-[240px] object-contain h-auto border border-black"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-[#000000] solid h-[40px] flex items-center mt-auto">
        <p className="text-[#00000] font-medium font-title text-[18px] cursor-pointer w-[360px] min-w-[300px] pl-2">
          1234 ROYAL ST LOS ANGELES CA
        </p>
        <div className="flex justify-center w-[6000px] sm:hidden">
          <p className="font-title font-medium">ALLANHMAN@GMAIL.COM</p>
        </div>
        <div className="flex gap-5 w-screen justify-end sm:hidden pr-10">
          <FaInstagram className="text-[#000000] ml-5 font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer" />
          <FaXTwitter className="text-[#000000] font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer" />
          <FaPhoneFlip className="text-[#000000] font-title text-[18px] hover:text-[#A50104] ease-in-out duration-300 cursor-pointer"></FaPhoneFlip>
        </div>
      </div>
    </div>
  );
};

export default About;
