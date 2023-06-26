import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import { subMenuNav } from "../constants";
import ProductRating from "./ProductRating";

const PhoneCard = ({ currentPage }) => {
  const { products } = useGlobalContext();
  const phones = subMenuNav[1].name;
  const navigate = useNavigate();

  if (products.length === 0) {
    return <p>No headphones available.</p>; // Display a message when no headphones are available
  }

  const truncateName = (name) => {
    if (name.length > 50) {
      return name.substring(0, 50) + "...";
    }
    return name;
  };

  const formatPrice = (price, discount) => {
    if (discount) {
      const discountedPrice = price - price * (discount / 100);
      return (
        <div className="flex gap-4">
          <p className="text-xl font-semibold text-gray-400 line-through">
            $ {price.toFixed(2)}
          </p>
          <p className="text-xl font-semibold text-red-500">
            {/* {discount}% OFF -  */}${discountedPrice.toFixed(2)}
          </p>
        </div>
      );
    }
    return <p className="mr-2 text-xl font-semibold">$ {price.toFixed(2)}</p>;
  };

  const handleViewAll = () => {
    navigate("/phones");
  };

  const filteredProducts =
    currentPage !== "phones"
      ? products.filter((product) => product.category === phones)
      : products.filter((product) => product.category === phones).slice(0, 6);

  return (
    <div>
      <div className="mt-10 mb-2 flex items-baseline justify-between relative">
        <div className="absolute sm:border-b-8 bottom-0 w-[235px] border-black z-10"></div>
        <div className="absolute sm:border-b-2 bottom-[3px] w-full border-b-gray-500"></div>

        <h2 className="text-[24px] font-medium mb-3">
          {currentPage === "phones" ? `${phones} For You!` : `All Phones`}
        </h2>
        {currentPage === "phones" && (
          <div className="text-right text-neutral-800 text-[16px] font-medium flex items-center">
            <button className="flex items-center" onClick={handleViewAll}>
              View All <FaChevronRight className="font-light text-gray-500" />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-wrap w-full relative justify-start gap-y-4 md:justify-center lg:justify-start mb-10 m-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border-[1px] w-full h-[405px] relative group mt-4 rounded-md sm:w-full md:w-[260px] hover:shadow-gray-400 shadow-md hover:transition-all md:mr-4"
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
                {truncateName(product.name)}
              </div>
              <div className="left-[20px] top-[278px] absolute text-zinc-900 text-[18px] font-semibold">
                {formatPrice(product.price, product.discount)}
              </div>
              <div className="w-full left-[20px] top-[300px] absolute">
                <div className="w-20 h-[15px] left-[0px] top-[1px] absolute flex-col justify-start items-start inline-flex">
                  <div className="text-[16px] font-normal">
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

export default PhoneCard;
