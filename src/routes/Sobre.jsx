import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../pages/Sobre/Hero.jsx";
import SobreSection from "../pages/Sobre/SobreSection.jsx";
import ObjetivosSection from "../pages/Sobre/ObjetivosSection.jsx";

function Sobre() {
  return (
    <>
      <Header />
      <Hero />
      <SobreSection />
      <ObjetivosSection />
      <Footer />
    </>
  );
}

export default Sobre;
