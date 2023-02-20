import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../pages/Bootcamps/Hero.jsx";
import BootcampsItem from "../pages/Bootcamps/BootcampsItem.jsx";

function Bootcamps() {
  return (
    <>
      <Header />
      <Hero />
      <BootcampsItem />
      <Footer />
    </>
  );
}

export default Bootcamps;
