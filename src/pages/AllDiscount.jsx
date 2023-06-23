import React from "react";
import DiscountCard from "../components/DiscountCard";
import { useGlobalContext } from "../context/context";
import { Wrapper } from "../components";

const AllDiscount = () => {
  const { products } = useGlobalContext();

  return (
    <Wrapper>
      {products.length === 0 ? (
        <p>No discounts available.</p>
      ) : (
        <DiscountCard currentPage="phones" />
      )}
    </Wrapper>
  );
};

export default AllDiscount;
