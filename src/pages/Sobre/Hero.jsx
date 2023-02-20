import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <Container>
        <Row>
          <Col lg={12} className="d-flex flex-column justify-content-center ">
            <h1 data-aos="fade-up">Sobre a Menina de UX</h1>
            <p data-aos="fade-up">
              Saiba mais sobre como essa iniciativa surgiu!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
