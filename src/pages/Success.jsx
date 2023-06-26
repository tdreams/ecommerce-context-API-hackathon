import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Wrapper } from "../components";

const Success = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">Thanks for shopping with us!</div>
          <div className="text-lg font-bold mt-2">
            Your order has been placed successfully.
          </div>
          <div className="text-base mt-5">
            For any product related query, drop an email to
          </div>
          <div className="underline">Shopcart@shop.com</div>

          <button
            className="mt-4 px-14 py-6 bg-black w-1/2 flex justify-center items-center align-middle m-auto text-white text-lg rounded-lg "
            onClick={handleBack}
          >
            Continue Shopping
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Success;
