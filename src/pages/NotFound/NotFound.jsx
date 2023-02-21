import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <Header />

      <section id="em-construcao" className="em-construcao">
        <Container>
          <Row className="align-items-center">
            <Col className="align-items-center" data-aos="fade-up">
              <Image
                src="../src/assets/img/em-construcao.webp"
                className="img-fluid animated"
                alt="Ilustração de três pessoas (dois homens e uma mulher) olhando para o que parece ser o projeto de um edificio"
                draggable="false"
              />
            </Col>
            <Col className="align-items-center" data-aos="fade-up">
              <h1>Opa, ainda estamos trabalhando nisso!</h1>
              <p>
                Enquanto essa parte do site não fica pronta, que tal voltar a
                navegar pelo incrível mundo de UX?
              </p>
              <div className="text-center text-lg-start">
                <Link to="/" className="btn-voltar-inicio">
                  Voltar para o início
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default NotFound;
