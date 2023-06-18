import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductCarroussel = ({ images }) => {
  const imageArray = Array.isArray(images) ? images : [images];
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={80}
        className="productCarousel"
      >
        {images.map((image) =>
          image.attributes.map((attribute) => (
            <img key={attribute.id} src={attribute.url} alt={attribute.name} />
          ))
        )}
      </Carousel>
    </div>
  );
};

export default ProductCarroussel;
