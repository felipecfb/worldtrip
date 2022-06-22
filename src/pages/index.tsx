import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header showBackIcon={false} />
      <Banner src="images/bannerHome.svg" alt="Banner" />
    </>
  );
};

export default Home;
