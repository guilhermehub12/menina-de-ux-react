import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../pages/Cursos/Hero.jsx";
import CursosItem from "../pages/Cursos/CursosItem.jsx";

function Cursos() {
  return (
    <>
      <Header />
      <Hero />
      <CursosItem />
      <Footer />
    </>
  );
}

export default Cursos;
