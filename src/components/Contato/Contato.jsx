import React from "react";
import "./Contato.css";
import AllImages from "../../utils/AllImages";
import { Instagram, Linkedin, At } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Contato() {
  const AOS_FADE_UP = "fade-up";
  const ICON_SIZE = 32;
  const contatos = [
    {
      href: "mailto:becabelin@gmail.com",
      icone: <At width={ICON_SIZE} />,
      titulo: "E-mail",
    },
    {
      href: "https://www.instagram.com/meninadeux",
      icone: <Instagram width={ICON_SIZE} />,
      titulo: "Instagram",
    },
    {
      href: "https://www.LinkedIn.com/company/meninadeux",
      icone: <Linkedin width={ICON_SIZE} />,
      titulo: "Linkedin",
    },
  ];

  return (
    <section id="contato" className="contato">
      <Container>
        <Row className="align-items-center">
          <Col data-aos={AOS_FADE_UP}>
            <h1>Redes Sociais</h1>
            <p data-aos={AOS_FADE_UP}>
              Me acompanhe nas redes sociais! <br></br>Se quiser conversar sobre
              projetos, eventos e afins, tem meu e-mail aí!
            </p>
            {contatos.map((contato, index) => {
              return (
                <Link
                  className="btn btn-primary"
                  key={`${contato}-${index}`}
                  data-aos={AOS_FADE_UP}
                  to={contato.href}
                  role="button"
                >
                  {contato.icone}
                  {contato.titulo}
                </Link>
              );
            })}
          </Col>

          <Col className="img-fluid" data-aos={AOS_FADE_UP}>
            <img
              src={AllImages.MulherRedesSociais}
              className="img-fluid animated"
              alt="Ilustração de uma Mulher como se fosse um post nas redes sociais"
              draggable="false"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contato;
