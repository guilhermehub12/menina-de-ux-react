import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllImages from "../../utils/AllImages";
import "./Telegram.css";

function Telegram() {
  return (
    <section id="telegram" className="telegram">
      <Container>
        <Row className="align-items-center">
          <Col className="align-items-center" data-aos="fade-up">
            <h1>Quer ficar por dentro de todas as novidades?</h1>
            <p>
              Entre no canal do Telegram da Menina de UX e fique sabendo de
              todos os cursos e processos seletivos novos!
            </p>
            <div className="text-center text-lg-start">
              <Link
                to="https://t.me/meninadeux"
                target="_blank"
                className="btn-quero-apoiar"
              >
                Entrar no canal
              </Link>
            </div>
          </Col>
          <Col className="align-items-center img-fluid" data-aos="fade-up">
            <img
              src={AllImages.MulherRecebendoNovidades}
              className="img-fluid animated"
              alt=""
              draggable="false"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Telegram;
