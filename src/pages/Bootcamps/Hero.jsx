import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <Container className="d-flex justify-content-center">
        <Row data-aos="zoom-out">
          <h1>Cursos Grandes e Bootcamps</h1>
          <p>
            As melhores e maiores certificações para quem quer entrar na área e
            se destacar
          </p>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
