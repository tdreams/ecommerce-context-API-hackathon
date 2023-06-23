import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import { navMenu } from "../constants";
import ProductRating from "./ProductRating";

const DiscountCard = ({ currentPage }) => {
  const { products } = useGlobalContext();
  const deals = navMenu[1].name;

  if (products.length === 0) {
    return <p>No Deals Available.</p>; // Display a message when no discount are available
  }

  const truncateName = (name) => {
    if (name.length > 50) {
      return name.substring(0, 50) + "...";
    }
    return name;
  };

  const formatPrice = (price) => {
    return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const hasDiscount = (product) => {
    return product.discount && product.discount > 0;
  };

  const calculateDiscountedPrice = (product) => {
    if (hasDiscount(product)) {
      const discountedPrice =
        product.price - (product.price * product.discount) / 100;
      return discountedPrice.toFixed(2);
    }
    return null;
  };

  const filteredProducts = products.filter(
    (product) =>
      (product.category === "Phones" || product.category === "Headphones") &&
      hasDiscount(product)
  );

  return (
    <div>
      <div className="mt-10 mb-2 flex items-baseline justify-between relative">
        <div className="absolute sm:border-b-8 bottom-0 w-[235px] border-black z-10"></div>
        <div className="absolute sm:border-b-2 bottom-[3px] w-full border-b-gray-500"></div>

        <h2 className="text-[24px] font-medium mb-3">
          {currentPage === deals ? `${deals} For You!` : `All deals`}
        </h2>
        {currentPage === "deals" && (
          <NavLink to="/deals">
            <div className="text-right text-neutral-800 text-[16px] font-medium flex items-center">
              View All <FaChevronRight className="font-light text-gray-500" />
            </div>
          </NavLink>
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
                {hasDiscount(product) ? (
                  <div>
                    <span className="text-gray-500 line-through">
                      ${formatPrice(product.price)}
                    </span>{" "}
                    <span className="text-xl font-semibold text-red-500">
                      ${calculateDiscountedPrice(product)}
                    </span>
                  </div>
                ) : (
                  `$${formatPrice(product.price)}`
                )}
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

export default DiscountCard;
