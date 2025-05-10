import React from "react";
import Header from "../components/header/header";
import { Footer } from "../components/footer/Footer";
import Integration from "../pages/homeSections/Integration";
import TechSection from "../pages/homeSections/TechSection";
import '../globals.css';
const AiIntegration = () => {
  return (
    <>
      <Header color={true} />
      <Integration />
      <TechSection />
      {/* <Footer /> */}
    </>
  );
};

export default AiIntegration;