import React, { useState } from "react";
import { useCartContext } from "../context/cart_context";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Wrapper from "../components/Wrapper";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, clear, del } = useCartContext();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate the total amount
  const total = cart.reduce((accumulator, product) => {
    const discountedPrice =
      product.price - product.price * (product.discount / 100);
    if (product.discount) {
      return accumulator + discountedPrice * product.amount;
    } else {
      return accumulator + product.price * product.amount;
    }
  }, 0);

  const handlePlaceOrder = () => {
    // Perform any necessary logic for placing the order

    // Open the modal
    setIsModalOpen(true);
    clear();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGoBack = () => {
    navigate("/");
  };

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
                <div className="w-[90%]">
                  <CartItem />
                </div>
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
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                  onClick={handlePlaceOrder}
                >
                  Place Order
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

        {/* MODAL START */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-[320px] h-[332px] p-14 shadow flex flex-col  text-center">
              <h2 className="text-lg w-full font-semibold mb-4">
                Thanks for your order!
              </h2>
              <p>Your order has been placed.</p>
              <button
                className="px-4 py-2 mt-9 rounded-full bg-black text-white font-medium flex justify-center m-auto "
                onClick={() => {
                  closeModal();
                  handleGoBack();
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        )}
        {/* MODAL END */}
      </Wrapper>
    </div>
  );
};

export default Cart;
