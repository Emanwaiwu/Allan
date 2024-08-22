import React from "react";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";
import six from "../images/6.jpg";
import seven from "../images/7.jpg";
import eight from "../images/8.jpg";
import nine from "../images/9.jpg";
import ten from "../images/10.jpg";
import eleven from "../images/11.jpg";
import twelve from "../images/12.jpg";
import thirteen from "../images/13.jpg";
import fourteen from "../images/14.jpg";
import fifteen from "../images/15.jpg";
import sixteen from "../images/16.jpg";
import seventeen from "../images/17.jpg";
import eighteen from "../images/18.jpg";
import nineteen from "../images/19.jpg";
import twenty from "../images/20.jpg";
import twentyone from "../images/21.jpg";
import twentytwo from "../images/22.jpg";
import twentythree from "../images/23.jpg";
import twentyfour from "../images/24.jpg";
import Navigation from "../components/Navigation";


const Portfolio = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>
      <div className="grid grid-cols-3 w-screen">
        <div className="h-[96vh] overflow-hidden">
          <div className="marquee-down flex flex-col">
            <img src={one} alt="" className="border border-black" />
            <img src={two} alt="" className="border border-black" />
            <img src={three} alt="" className="border border-black" />
            <img src={four} alt="" className="border border-black" />
            <img src={five} alt="" className="border border-black" />
            <img src={six} alt="" className="border border-black" />
            <img src={seven} alt="" className="border border-black" />
            <img src={eight} alt="" className="border border-black" />
            <img src={one} alt="" className="border border-black" />
            <img src={two} alt="" className="border border-black" />
            <img src={three} alt="" className="border border-black" />
            <img src={four} alt="" className="border border-black" />
            <img src={five} alt="" className="border border-black" />
            <img src={six} alt="" className="border border-black" />
            <img src={seven} alt="" className="border border-black" />
            <img src={eight} alt="" className="border border-black" />
          </div>
        </div>
        <div className="relative h-[96vh] overflow-hidden">
          <div className="marquee-up flex flex-col">
            <img src={nine} alt="" className="border border-black" />
            <img src={ten} alt="" className="border border-black" />
            <img src={eleven} alt="" className="border border-black" />
            <img src={twelve} alt="" className="border border-black" />
            <img src={thirteen} alt="" className="border border-black" />
            <img src={fourteen} alt="" className="border border-black" />
            <img src={fifteen} alt="" className="border border-black" />
            <img src={sixteen} alt="" className="border border-black" />
            <img src={nine} alt="" className="border border-black" />
            <img src={ten} alt="" className="border border-black" />
            <img src={eleven} alt="" className="border border-black" />
            <img src={twelve} alt="" className="border border-black" />
            <img src={thirteen} alt="" className="border border-black" />
            <img src={fourteen} alt="" className="border border-black" />
            <img src={fifteen} alt="" className="border border-black" />
            <img src={sixteen} alt="" className="border" />
          </div>
        </div>
        <div className="relative h-[96vh] overflow-hidden">
          <div className="marquee-down flex flex-col">
            <img src={seventeen} alt="" className="border border-black" />
            <img src={eighteen} alt="" className="border border-black" />
            <img src={nineteen} alt="" className="border border-black" />
            <img src={twenty} alt="" className="border border-black" />
            <img src={twentyone} alt="" className="border border-black" />
            <img src={twentytwo} alt="" className="border border-black" />
            <img src={twentythree} alt="" className="border border-black" />
            <img src={twentyfour} alt="" className="border border-black" />
            <img src={seventeen} alt="" className="border border-black" />
            <img src={eighteen} alt="" className="border border-black" />
            <img src={nineteen} alt="" className="border border-black" />
            <img src={twenty} alt="" className="border border-black" />
            <img src={twentyone} alt="" className="border border-black" />
            <img src={twentytwo} alt="" className="border border-black" />
            <img src={twentythree} alt="" className="border border-black" />
            <img src={twentyfour} alt="" className="border border-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
