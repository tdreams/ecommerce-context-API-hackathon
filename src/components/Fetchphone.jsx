import React, { useEffect, useState } from "react";
import { useCartContext } from "../Context/cart_context";
import { useGlobalContext } from "../Context/context";
import { NavLink } from "react-router-dom";

const Fetchphone = () => {
  const { amount, products, addToCart, inc, dec } = useGlobalContext();
  const { add } = useCartContext();
  return (
    <div className="mb-10 relative">
      <h2 className="mt-2 mb-2 text-[24px] font-medium">Phones For You!</h2>
      <div className="mt-6 grid grid-col-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-">
        {products
          .filter((product) => product.category === "Phones")
          .map((product) => (
            <div
              key={product.id}
              className="group relative hover:transition-all"
            >
              <NavLink to={`/phones/${product.id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-[#EDEDED] lg:aspect-none group-hover:opacity-75  lg:h-80">
                  <img
                    src={product.image}
                    alt={product.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:p-3 "
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>

                  {/* <p className="text-sm font-medium text-gray-900">
            ${product.price}
          </p> */}
                </div>
                <div className="flex w-full ">
                  <p className="mt-1 text-sm text-gray-500">
                    {/* {product.color[0]}-{product.color[1]} */}
                  </p>
                  <div className=" flex relative">
                    <p className="text-sm font-medium text-gray-900">
                      ${product.price}
                    </p>
                  </div>
                </div>
                <div
                  className="mt-5 justify-center ml-1 cursor-pointer "
                  onClick={() => add(product.id, product.amount, product)}
                >
                  <a className="btn bg-black text-white absolute -bottom-5">
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

export default Fetchphone;
