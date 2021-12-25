import React from "react";
import Layout from "../pages/components/Layout";
import Detail from "./components/Contact/Detail";
import Hero from "./components/Contact/Hero";

const contact = () => {
  return (
    <>
      <Layout pageTitle="Contact">
        <Hero />
        <Detail />
      </Layout>
    </>
  );
};

export default contact;
