import React, { useState, useRef, useEffect } from "react";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
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
import { FaChevronLeft } from "react-icons/fa";
import ProductRating from "../components/ProductRating";
import FetchHeadphones from "../components/FetchHeadphones";
import YouMayLike from "../components/YouMayLike";
import Review from "../components/Review";
import { reviews } from "../constants";
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
      position: toast.POSITION.TOP_RIGHT,
      className: "custom-toast-position",
      theme: "dark",
    });
  };

  const handleBuyNow = () => {
    add(newItem.id, newItem.amount, newItem);
    res(newItem.id);
    navigate("/cart");
    toast.success(`${newItem.name} added to cart!`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "custom-toast-position",
      theme: "dark",
    });
  };

  const handleScroll = () => {
    if (rightColumnRef.current) {
      const { top } = rightColumnRef.current.getBoundingClientRect();
      setIsSticky(top <= 0);
    }
  };
  const location = useLocation();
  const navigate = useNavigate();
  const [previousPath, setPreviousPath] = useState(null);

  useEffect(() => {
    setPreviousPath(location.pathname);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const rightColumnClasses = isSticky ? "scrollable" : "";
  const goBack = () => {
    navigate(-1);
  };
  const discountedPrice =
    newItem.price - newItem.price * (newItem.discount / 100);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div>
          <button
            className="mb-4 font-semibold flex items-center"
            onClick={goBack}
          >
            <FaChevronLeft /> Go back
          </button>
        </div>
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
              {newItem.discount ? (
                <div className="mr-2">
                  <p className="text-xl font-semibold text-gray-400 line-through">
                    $ {newItem.price.toFixed(2)}
                  </p>
                  <p className="text-xl font-bold text-red-500">
                    {newItem.discount}% OFF - ${discountedPrice.toFixed(2)}
                  </p>
                </div>
              ) : (
                <p className="mr-2 text-xl font-bold">
                  $ {newItem.price.toFixed(2)}
                </p>
              )}
            </div>

            {/* QUANTITY START */}
            <div className="flex gap-[20px] justify-between items-center mb-10">
              <h3 className="font-bold text-lg">Quantity</h3>
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
            <div>
              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium active:scale-95 mb-4 hover:scale-[1.1]  transition-all"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              <button
                className="w-full py-4 rounded-full bg-white text-black text-lg font-medium active:scale-95 mb-10 hover:scale-[1.1]  transition-all border border-black"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>

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

        {/* Start RelatedProduct  */}
        <div className="mt-[20px]">
          <YouMayLike products={products} />
        </div>
        {/* End RelatedProduct */}

        {/* Start Image products details  */}
        {newItem.images &&
          newItem.images[0].details &&
          newItem.images[0].details.length > 0 && (
            <div className="flex flex-col w-full items-center">
              {newItem.images[0].details.map((image, index) => (
                <div key={index} className="my-4 object-contain">
                  <img
                    src={image.url}
                    alt={`Product Detail ${index + 1}`}
                    className="my-0 object-fill"
                  />
                  {image.url2 && (
                    <img src={image.url2} alt="" className="my-0" />
                  )}
                </div>
              ))}
            </div>
          )}
        {/* End Image Details Product */}
        {/* REVIEWS START */}
        <div className="border-t py-6">
          <h3 className="text-lg font-semibold mb-4">Reviews</h3>
          {reviews.map((review) => (
            <Review
              key={review.id}
              name={review.name}
              rating={review.rating}
              title={review.title}
              comment={review.comment}
              date={review.date}
              avatar={review.avatar}
            />
          ))}
        </div>
        {/* REVIEWS END */}
      </Wrapper>
    </div>
  );
};

export default SingleProduct;
