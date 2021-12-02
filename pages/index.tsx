import type { NextPage } from "next";
import HeroSection from './components/Home/HeroSection'
import Layout from "../pages/components/Layout";
import SecondSection from "./components/Home/SecondSection"
const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Home">
        <HeroSection />
        <SecondSection />
      </Layout>
    </>
  );
};

export default Home;


