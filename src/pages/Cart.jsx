import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useCartContext } from "../context/cart_context";
import "../index.css";
import Wrapper from "../components/Wrapper";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cart, clear } = useCartContext();
  const [stripe, setStripe] = useState(null);
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

  useEffect(() => {
    const fetchStripe = async () => {
      const stripeInstance = await loadStripe(
        import.meta.env.VITE_APP_STRIPE_KEY
      );
      setStripe(stripeInstance);
    };

    fetchStripe();
  }, []);

  const handleCheckout = async () => {
    setLoading(true);

    // Create line items based on the cart items
    const lineItems = cart.map((product) => ({
      price: product.apiId,
      quantity: product.amount,
    }));

    // Create a new Stripe Checkout Session
    try {
      const { error } = await stripe.redirectToCheckout({
        lineItems,
        mode: "payment",
        successUrl: `${window.location.origin}/success`, // Add success URL parameter
        cancelUrl: `${window.location.origin}/cancel`, // Replace with your cancel URL
      });
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
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
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex justify-center gap-8"
                  onClick={handleCheckout}
                >
                  Place Order
                  {loading && (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  )}
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
