import React from "react";
import { useGlobalContext } from "../context/context";
import ProductsCard from "../components/ProductsCard";
import { Wrapper } from "../components";

const AllHeadPhones = () => {
  const { products } = useGlobalContext();

  return (
    <Wrapper>
      {products.length === 0 ? (
        <p>No headphones available.</p>
      ) : (
        <ProductsCard />
      )}
    </Wrapper>
  );
};

export default AllHeadPhones;
