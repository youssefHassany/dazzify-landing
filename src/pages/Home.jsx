import React from "react";
import Hero from "../components/home/Hero";
import Vision from "../components/home/Vision";
import Clients from "../components/home/Clients";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <Vision />
      <HowItWorks />
      <WhyChooseUs />
      <Clients />
    </>
  );
};

export default Home;
