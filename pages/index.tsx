import type { NextPage } from "next";
import HeroSection from './components/Home/HeroSection'
import Layout from "../pages/components/Layout";
import SecondSection from "./components/Home/SecondSection"
import ThirdSection from "./components/Home/ThirdSection"
const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Home">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
      </Layout>
    </>
  );
};

export default Home;


