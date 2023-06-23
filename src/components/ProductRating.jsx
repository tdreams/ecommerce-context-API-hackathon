import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductRating = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Math.round((rating / maxRating) * maxRating);
  const starIcons = Array(maxRating)
    .fill(null)
    .map((_, index) => {
      if (index < filledStars) {
        return <AiFillStar key={index} />;
      }
      return <AiOutlineStar key={index} />;
    });
  return (
    <div className="flex items-baseline align-middle gap-1">
      <div className="mt-[10px] flex gap-[5px] items-center text-[#f02d34]">
        {starIcons}
        <div className="text-sm">({rating})</div>
      </div>
    </div>
  );
};

export default ProductRating;
