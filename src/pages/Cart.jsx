import React from "react";
import { useCartContext } from "../context/cart_context";
import "../index.css";
import Wrapper from "../components/Wrapper";
import CartItem from "../components/CartItem";

const Cart = () => {
  /* const { cart } = useGlobalContext(); */
  const { amount, cart, clear, decProd, incProd, del } = useCartContext();

  // Calculate the total amount
  const total = cart.reduce((accumulator, product) => {
    return accumulator + product.price * product.amount;
  }, 0);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cart.length > 0 && (
          <>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
                Shopping Cart
              </div>
            </div>
            {/* HEADING AND PARAGRAPH END */}
            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                <div className="w-[90%]">{<CartItem />}</div>
              </div>
              {/* CART ITEMS END */}

              {/* CART SUMMARY START */}
              <div className="flex-[1]">
                <div div className="text-lg font-bold">
                  Purchase Summary
                </div>
                <div className="p-5 my-5 bg-black rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-[1rem] md:text-lg font-medium text-white">
                      Total
                    </div>
                    <div className="text-white">${total.toFixed(2)}</div>
                  </div>
                  <div className="text-sm md:text-[1rem] py-5 border-t mt-5 border-gray-400 text-white font-normal">
                    The subtotal of your order displays the overall price,
                    encompassing duties and taxes, before any discounts are
                    applied. Please note that it does not cover delivery costs
                    and international transaction fees.
                  </div>
                </div>
                {/* BUTTON START */}
                <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                  Checkout
                </button>
                {/* BUTTON START */}
              </div>
              {/* CART SUMMARY END */}
            </div>
            {/* CART CONTENT END */}
          </>
        )}
        {/* This is empty screen */}
        {cart.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-24">
            <img
              src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
              alt="empty image of cart"
              className="w-[300px] md:w-[800px] sm:w-auto"
            />
            <span className="text-center mt-4">Your cart is empty</span>
          </div>
        )}
      </Wrapper>
    </div>
  );
};
export default Cart;

{
}
