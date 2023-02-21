import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <Container className="d-flex justify-content-center">
        <Row data-aos="zoom-out">
          <h1>Cursinhos Tops e Gratuitos</h1>
          <p>Os melhores de tech (e outras áreas, hein)</p>
          <p>
            Você pode filtrar os cursos por uma área específica, <br></br>
            mas tem sites que têm todos os tipos de cursos!
          </p>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
