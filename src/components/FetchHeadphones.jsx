import React from "react";
import { useCartContext } from "../Context/cart_context";
import { useGlobalContext } from "../Context/context";
import { NavLink } from "react-router-dom";

const FetchHeadphones = () => {
  const { products } = useGlobalContext();
  const { add } = useCartContext();

  if (products.length === 0) {
    return <p>No headphones available.</p>; // Display a message when no headphones are available
  }

  return (
    <div className="mb-10">
      <h2 className="mt-2 mb-2 text-[24px] font-medium">Headphones For You!</h2>
      <div className="mt-6 grid grid-col-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-">
        {products
          .filter((product) => product.category === "Headphones")
          .map((product) => (
            <div
              key={product.id}
              className="group relative hover:transition-all"
            >
              <NavLink to={`/headphones/${product.id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-[#EDEDED] lg:aspect-none group-hover:opacity-75  lg:h-80">
                  <img
                    src={product.image}
                    alt={product.image}
                    className="object-cover object-center lg:h-full lg:w-full group-hover:scale-[1.1] transition-all"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                  </div>
                </div>
                <div className="flex w-full">
                  <p className="mt-1 text-sm text-gray-500">
                    {/* {product.color[0]}-{product.color[1]} */}
                  </p>
                  <div className="flex relative">
                    <p className="text-sm font-medium text-black mt-[6px]">
                      ${formatPrice(product.price)}
                    </p>
                  </div>
                </div>
                <div
                  className="mt-5 justify-center ml-1 cursor-pointer relative"
                  onClick={() => add(product.id, product.amount, product)}
                >
                  <a className="btn bg-black text-white absolute top-[-1rem]">
                    Add to card
                  </a>
                </div>
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

export default FetchHeadphones;
