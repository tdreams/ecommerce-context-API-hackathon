import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow, responsive } from "./CarouselUtils";
import ProductRating from "./ProductRating";

const YouMayLike = ({ products }) => {
  const location = useLocation();
  const [category, setCategory] = useState("Headphones"); // Default category is "Headphones"

  useEffect(() => {
    // Update the category when the pathname changes
    if (location.pathname.includes("/Headphones")) {
      setCategory("Phones");
    } else if (location.pathname.includes("/Phones")) {
      setCategory("Headphones");
    }
  }, [location.pathname]);

  // Filter the products based on the determined category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const formatPrice = (price, discount) => {
    if (discount) {
      const discountedPrice = price - price * (discount / 100);
      return (
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-400 line-through ">
            ${price.toFixed(2)}
          </p>
          <p className="text-sm font-semibold text-red-500">
            ${discountedPrice.toFixed(2)}
          </p>
        </div>
      );
    }
    return <p className="text-sm font-semibold">${price.toFixed(2)}</p>;
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Customers also purchased
      </h2>

      <Carousel
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        responsive={responsive}
        containerClass="-mx-[10px] "
        itemClass="mr-[30px]"
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="mt-6 grid grid-cols- gap-x- gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8"
          >
            <div className="group relative">
              <NavLink to={`/${category}/${product.id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-52 lg:w-60">
                  <img
                    src={product.image}
                    alt={product.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-clip overflow-hidden">
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {product.name.slice(0, 15).concat("...")}
                      </a>
                    </h3>
                  </div>
                  <div>{formatPrice(product.price, product.discount)}</div>
                </div>
              </NavLink>
              <p className="text-sm text-gray-500">
                <ProductRating rating={product.rating} />
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default YouMayLike;
