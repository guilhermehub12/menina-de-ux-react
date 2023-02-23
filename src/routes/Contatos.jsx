import React from "react";
import Header from "../components/Header/Header.jsx";
import Telegram from "../components/Telegram/Telegram.jsx";
import Contato from "../components/Contato/Contato.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ContatoForm from "../components/Form/ContatoForm.jsx";

function Contatos() {
  return (
    <>
      <Header />
      <Telegram />
      <Contato />
      <ContatoForm />
      <Footer />
    </>
  );
}

export default Contatos;
