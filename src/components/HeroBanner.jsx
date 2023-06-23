import React from "react";
import Wrapper from "./Wrapper";
import { NavLink, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiArrowBack } from "react-icons/bi";
const HeroBanner = () => {
  const navigate = useNavigate();
  const handleClickButton = () => navigate("/headphones/recZkNf2kwmdBcq19");

  return (
    <>
      <div className="">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={true}
          showStatus={false}
        >
          <div className="bg-[#dcdcdc] relative leading-[1] w-full md:h-[400px] h-[450px] text-left">
            <Wrapper>
              <div className="pt-10">
                <p className="md:block hidden font-medium ">JBL Pro Play</p>
                <p className="md:hidden font-bold absolute top-[64%] text-6xl">
                  JBL Pro Play
                </p>
                <h3 className="text-6xl font-medium mt-[4px] md:block hidden">
                  Summer Deal
                </h3>
                <h1 className="text-9xl font-bold uppercase text-left text-white -ml-[20px] md:block hidden">
                  Cool
                </h1>
              </div>
              <div className="absolute bottom-11 right-[35%] md:hidden z-[100]">
                <button
                  onClick={handleClickButton}
                  className="bg-black text-white px-6 py-4 mt-8 rounded-smfont-medium "
                >
                  <p>Shop now</p>
                </button>
              </div>

              <button
                type="button"
                className="bg-black text-white px-6 py-3 mt-8 rounded-sm font-medium hover:bg-opacity-90 hidden md:block"
                onClick={handleClickButton}
              >
                Shop now
              </button>

              <div className=" absolute -top-12 lg:top-0 md:top-1 right-0 lg:right-[15%]">
                <img
                  src="/headphoneHero.webp"
                  className="w-auto h-[450px] object-contain"
                />
              </div>
            </Wrapper>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default HeroBanner;
