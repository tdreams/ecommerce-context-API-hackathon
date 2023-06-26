import React from "react";
import ProductRating from "./ProductRating";

const Review = ({ name, avatar, rating, title, comment, date }) => (
  <div className="border-t py-4">
    <div className="flex items-center mb-1 space-x-2 ">
      <img
        src={avatar}
        alt="Rounded avatar"
        className="w-10 h-10 rounded-full object-cover mr-2"
      />
      <div className="font-medium dark:text-black/[0.7]">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="block text-sm text-gray-500 dark:text-gray-400">
          {`Reviewed in the United State on ${date}`}
        </p>
      </div>
    </div>
    <div className="flex items-center mb-2">
      <div className="-mt-[0.6rem]">
        <ProductRating rating={rating} />
      </div>
      <h3 className="ml-2 text-sm font-bold text-gray-900 ">{title}</h3>
    </div>
    <p className="mb-2 text-gray-600">{comment}</p>
  </div>
);

export default Review;
