import { HeroBanner, Wrapper } from "../components";
import FetchHeadphones from "../components/FetchHeadphones";
import Fetchphone from "../components/Fetchphone";
import FooterBanner from "../components/FooterBanner";
import PhonesCard from "../components/PhonesCard";
import ProductsCard from "../components/ProductsCard";
const Home = ({ bannerData }) => {
  return (
    <>
      <HeroBanner />
      <Wrapper>
        <ProductsCard />
      </Wrapper>
      <FooterBanner />
      <Wrapper>
        <PhonesCard />
      </Wrapper>
    </>
  );
};

export default Home;
