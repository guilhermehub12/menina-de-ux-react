import React from "react";
import "./Conteudos.css"
import Objetivos from "../../components/Estude/Objetivos";
import Conteudo from "../../components/Estude/Conteudo";

function Conteudos() {
  return (
    <>
      <section id="conteudos" className="conteudos">
        <div className="row align-items-center">
          <h1 className="title">O que você quer aprender hoje?</h1>
        </div>

        <Objetivos />
        <Conteudo />
      </section>
    </>
  );
}

export default Conteudos;
