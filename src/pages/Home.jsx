import { HeroBanner, Wrapper } from "../components";
import FetchHeadphones from "../components/FetchHeadphones";
import Fetchphone from "../components/Fetchphone";
import FooterBanner from "../components/FooterBanner";
import PhoneCard from "../components/PhoneCard";
import ProductsCard from "../components/ProductsCard";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Wrapper>
        <ProductsCard currentPage="headphones" />
      </Wrapper>
      <FooterBanner />
      <Wrapper>
        <PhoneCard currentPage="phones" />
      </Wrapper>
    </>
  );
};

export default Home;
