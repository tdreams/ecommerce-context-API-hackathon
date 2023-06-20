import React, { useState, useRef, useEffect } from "react";
import ProductCarroussel from "../components/ProductCarroussel";
import { Wrapper } from "../components";
import { useCartContext } from "../context/cart_context";
import { useGlobalContext } from "../context/context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import ProductRating from "../components/ProductRating";
import FetchHeadphones from "../components/FetchHeadphones";

const SingleProduct = () => {
  const rightColumnRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const { id } = useParams();
  const { products, inc, dec, res } = useGlobalContext();
  const { add } = useCartContext();
  const newItem = products.find((product) => product.id === id);

  const handleDecQuantiy = () => {
    if (newItem.amount > 1) {
      dec(newItem.id);
    }
  };

  const handleIncQuantiy = () => {
    if (newItem.amount <= newItem.stock) {
      inc(newItem.id);
    }
  };

  const handleAddToCart = () => {
    add(newItem.id, newItem.amount, newItem);
    res(newItem.id);
    toast.success(`${newItem.name} added to cart!`, {
      position: toast.POSITION.MIDDLE_CENTER,
      theme: "dark",
    });
  };

  const handleScroll = () => {
    if (rightColumnRef.current) {
      const { top } = rightColumnRef.current.getBoundingClientRect();
      setIsSticky(top <= 0);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rightColumnClasses = isSticky ? "scrollable" : "";

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 lg:sticky lg:top-0">
            <ProductCarroussel images={newItem.images} />
          </div>

          {/* left column end */}

          {/* right column start */}
          <div
            className={`flex-[1] py-0 ${rightColumnClasses}`}
            ref={rightColumnRef}
          >
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {newItem.name}
            </div>
            {/* PRODUCT RATING */}
            <ProductRating rating={newItem.rating} />

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              {/* {p.subtitle} */}
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-xl font-semibold">$ {newItem.price}</p>
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* QUANTITY START */}
            <div className="flex gap-[20px] justify-between items-center mb-10">
              <h3>Quantity</h3>
              <p className="border-[1px] p-[6px] flex items-center">
                <button
                  onClick={handleDecQuantiy}
                  className="border-r-gray-300  border-r h-full flex items-center justify-center w-10"
                >
                  <AiOutlineMinus />
                </button>
                <span className="border-r-gray-300  border-r h-full flex items-center justify-center w-10">
                  {newItem.amount}
                </span>
                <button
                  onClick={handleIncQuantiy}
                  className=" h-full flex items-center justify-center w-10"
                >
                  <AiOutlinePlus />
                </button>
              </p>
            </div>
            {/* QUANTITY END */}

            <ToastContainer />
            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium active:scale-95 mb-10 hover:scale-[1.1]  transition-all"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <p>{newItem.description}</p>
                {/* <ReactMarkdown>{p.description}</ReactMarkdown> */}
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>

        {/* <RelatedProducts products={products} /> */}
        <div className="mt-[20px]">
          <h2 className="text-xl font-medium">You may also like</h2>
          <div className="flex flex-row h-[400px] overflow-x-auto">
            <div className="flex p-10 mt-[20px]">
              {products.slice(0, 1).map((item) => (
                <div key={item.id}>
                  <FetchHeadphones product={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SingleProduct;
