import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllImages from "../../utils/AllImages";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-estude">
      <Container>
        <Row>
          <Col
            md={4}
            lg={6}
            className="d-flex flex-column justify-content-center"
          >
            <h1 data-aos="fade-up">
              Estude com a <br></br>Menina de UX
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              Aprenda sobre carreira, currículo, design e tecnologia com os
              vários conteúdos gratuitos aqui!
            </p>
          </Col>
          <Col
            md={4}
            lg={6}
            className="hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src={AllImages.MulherEstudando2}
              className="img-fluid"
              alt="Ilustração de uma mulher estudando"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
