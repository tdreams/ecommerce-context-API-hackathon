import React from "react";
import Wrapper from "./Wrapper";
import { NavLink } from "react-router-dom";

const FooterBanner = ({}) => {
  return (
    <div className="bg-black w-full  relative h-[400px] leading-3 text-white mt-4 mb-4 md:p-10">
      <div className="flex justify-between">
        <div className="m-[18px] mt-24">
          <p className="m-[18px] hidden md:block">20% OFF</p>
          <h3 className="font-black text-6xl ml-[25px] uppercase hidden md:block">
            play
          </h3>
          <h3 className="font-black text-6xl ml-[25px] uppercase hidden md:block">
            better
          </h3>
          <p className="m-[18px] hidden md:block">10 Nov to 23 Dec</p>
        </div>

        <div className="">
          <img
            src="./boat.webp"
            alt="boat headphone"
            className="absolute -top-16 left-[10%] md:left-[20%] lg:left-[30%]  object-cover w-[320px] lg:w-[500px] "
          />
        </div>

        <div className="font-bold text-xl leading-3 mr-[18px] mt-52   md:hidden">
          <p className="text-base">Boat</p>
          <h3 className="font-black text-4xl  uppercase">Best Deal</h3>
          <p className="text-base w-80">
            The award-winning sound and design you’ve come to love from Beats.
          </p>
          <div className="">
            <NavLink to="/headphones/recZkNf2kwmdcds19">
              <button
                type="button"
                className="bg-white text-black px-6 py-3 mt-4 rounded-smfont-medium hover:bg-opacity-90 "
              >
                Shop now
              </button>
            </NavLink>
          </div>
        </div>

        <div className="font-bold text-xl leading-3 mr-[10px] mt-24 z-50 hidden md:block">
          <p className="text-lg">Beats</p>
          <h3 className="font-black text-6xl  uppercase">Best Deal</h3>
          <p className="text-lg w-80">
            The award-winning sound and design you’ve come to love from Beats.
          </p>
          <div className="">
            <NavLink to="/headphones/recZkNf2kwmdcds19">
              <button
                type="button"
                className="bg-white text-black px-6 py-3 mt-8 rounded-smfont-medium hover:bg-opacity-90 "
              >
                Shop now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
