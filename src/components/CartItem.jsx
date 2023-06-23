import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCartContext } from "../context/cart_context";

const CartItem = () => {
  const { amount, cart, clear, decProd, incProd, del } = useCartContext();

  return (
    <>
      {cart.map((product) => {
        const discountedPrice =
          product.originalPrice -
          product.originalPrice * (product.discount / 100);
        return (
          <div
            className="flex py-5 gap-3 md:gap-5 border-b"
            key={product.id + product.selectedSize}
          >
            {/* IMAGE START */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
              <img src={product.image} alt={product.image} />
            </div>
            {/* IMAGE END */}
            <div className="w-full flex flex-col">
              <div className="flex flex-col md:flex-row justify-between">
                {/* PRODUCT TITLE */}
                <div className="text-lg md:text-2xl font-semibold text-black">
                  {product.name}
                </div>
                {/* PRODUCT PRICE */}
                <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                  {product.discount ? (
                    <>
                      <span className="text-red-500 ">
                        ${discountedPrice * product.amount}
                      </span>{" "}
                      <span className="line-through">
                        ${product.originalPrice * product.amount}
                      </span>
                    </>
                  ) : (
                    `$${product.price * product.amount}`
                  )}
                </div>
              </div>
              {/* PRODUCT SUBTITLE */}
              <div className="text-md font-medium text-black/[0.5] hidden md:block">
                {product.category}
              </div>
              <div className="flex items-baseline justify-between mt-4">
                <div className="flex items-baseline gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                  <div className="flex items-baseline gap-2">
                    <div className="font-semibold">Quantity</div>
                    {product.amount}
                  </div>
                </div>
                <RiDeleteBin6Line
                  className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                  onClick={() => del(product.id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItem;
