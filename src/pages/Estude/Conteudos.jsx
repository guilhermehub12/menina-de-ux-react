import React from "react";
import "./Conteudos.css";
import Objetivos from "../../components/Estude/Objetivos";
import Conteudo from "../../components/Estude/Conteudo";
import { Row } from "react-bootstrap";

function Conteudos() {
  return (
    <>
      <section id="conteudos" className="conteudos">
        <Row className="align-items-center">
          <h1 className="title">O que você quer aprender hoje?</h1>
        </Row>
        <Objetivos />
        <Conteudo />
      </section>
    </>
  );
}

export default Conteudos;
