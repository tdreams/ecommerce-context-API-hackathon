import React from "react";
import Wrapper from "./Wrapper";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiArrowBack } from "react-icons/bi";
const HeroBanner = () => {
  return (
    <>
      <Wrapper classname="mt-4">
        <div className="">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
          >
            <div className="px-[100px] py-[40px] bg-[#dcdcdc] rounded-md relative leading-[1] w-full md:h-[400px] h-[450px] text-left">
              <p className="font-medium flex text-left">JBL Pro Play</p>
              <h3 className="text-[40px] font-medium flex mt-[4px]">
                Summer Deal
              </h3>
              <h1 className="text-[10em] font-medium flex uppercase text-left text-white -ml-[20px]">
                Cool
              </h1>
              <button
                type="button"
                className="rounded-[15px] bg-black px-[10px] py-[12px] text-white mt-[40px] text-lg font-[500]
                cursor-pointer "
              >
                Shop now
              </button>
              <img
                src="/headphoneHero.webp"
                className="absolute top-0 left-40 w-[450px] h-[450px] object-contain"
              />
            </div>

            {/*  <div>
              <img
                src="/slide-2.png"
                className="aspect-[16/10] md:aspect-auto object-cover "
              />
              <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                Shop now
              </div>
            </div>

            <div>
              <img
                src="/slide-3.png"
                className="aspect-[16/10] md:aspect-auto object-cover"
              />
              <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                Shop now
              </div>
            </div> */}
          </Carousel>
        </div>
      </Wrapper>
    </>
  );
};
export default HeroBanner;
