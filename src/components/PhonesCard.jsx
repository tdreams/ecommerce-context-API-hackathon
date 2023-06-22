import React from "react";
import { useCartContext } from "../context/cart_context";
import { useGlobalContext } from "../context/context";
import { NavLink } from "react-router-dom";
import ProductRating from "./ProductRating";
import { FaChevronRight } from "react-icons/fa";
import { subMenuNav } from "../constants";

const PhonesCard = () => {
  const { products } = useGlobalContext();
  const { add } = useCartContext();
  const phones = subMenuNav[1].name;

  if (products.length === 0) {
    return <p>No headphones available.</p>; // Display a message when no headphones are available
  }

  return (
    <div>
      <div className="mt-10 mb-2 flex items-baseline justify-between relative">
        <div className="absolute sm:border-b-8 bottom-0 w-[235px] border-black z-10"></div>
        <div className="absolute sm:border-b-2 bottom-[3px] w-full border-b-gray-500"></div>

        <h2 className="text-[24px] font-medium mb-3">{`${phones} For You!`}</h2>
        <div className="text-right text-neutral-800 text-[16px] font-medium flex items-center">
          View All <FaChevronRight className="font-light text-gray-500" />
        </div>
      </div>

      <div className="flex flex-wrap w-full relative justify-start gap-y-4 md:justify-center lg:justify-start mb-10 m-auto">
        <div></div>
        {products
          .filter((product) => product.category === phones)
          .map((product) => (
            <div
              key={product.id}
              className="border-[1px] w-full h-[405px] relative group  mt-4 rounded-md sm:w-full md:w-[260px] hover:shadow-gray-400 shadow-md hover:transition-all md:mr-4"
            >
              <NavLink to={`/phones/${product.id}`}>
                <div className="w-auto h-[230px] p-2 bg-white justify-center items-center flex inset-0 m-auto mt-4">
                  <img
                    className="w-full h-full object-contain group-hover:scale-[1.1] transition-all "
                    src={product.image}
                    alt={product.image}
                  />
                </div>

                <div className="left-[20px] top-[339px] absolute text-zinc-600 text-[16px] font-normal leading-normal">
                  {product.name.length > 50
                    ? `${product.name.substring(0, 50)}...`
                    : product.name}
                </div>
                <div className="left-[20px] top-[278px] absolute text-zinc-900 text-[18px] font-semibold">
                  ${formatPrice(product.price)}
                </div>
                <div className="w-full left-[20px] top-[300px] absolute">
                  <div className="w-20 h-[15px] left-[0px] top-[1px] absolute flex-col justify-start items-start inline-flex">
                    <div className=" text-[16px] font-normal">
                      <ProductRating rating={product.rating} />
                    </div>
                  </div>
                </div>
                <div className="w-full h-[0px] left-[0px] top-[261px] absolute border border-gray-100"></div>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

// Function to format the price with commas and decimal points
const formatPrice = (price) => {
  return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default PhonesCard;
