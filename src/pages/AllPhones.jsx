import React from "react";
import { useGlobalContext } from "../context/context";
import PhoneCard from "../components/PhoneCard";
import { Wrapper } from "../components";

const AllPhones = () => {
  const { products } = useGlobalContext();
  return (
    <Wrapper>
      {products.length === 0 ? <p>No headphones available.</p> : <PhoneCard />}
    </Wrapper>
  );
};

export default AllPhones;
