import { HeroBanner, Wrapper } from "../components";
import FetchHeadphones from "../components/FetchHeadphones";
import Fetchphone from "../components/Fetchphone";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Wrapper>
        <div>
          <FetchHeadphones />
          <Fetchphone />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
