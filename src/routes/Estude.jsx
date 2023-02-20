import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Telegram from "../components/Telegram/Telegram.jsx";
import Contato from "../components/Contato/Contato.jsx";
import Hero from "../pages/Estude/Hero.jsx";
import Conteudos from "../pages/Estude/Conteudos.jsx";

function Estude() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Conteudos />
        <Telegram />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default Estude;
