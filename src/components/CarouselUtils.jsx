import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className="absolute left-0 top-0 text-3xl"
      onClick={() => onClick()}
    >
      <FaChevronLeft />
    </button>
  );
};

export const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className="absolute right-0 top-0 text-3xl"
      onClick={() => onClick()}
    >
      <FaChevronRight />
    </button>
  );
};
