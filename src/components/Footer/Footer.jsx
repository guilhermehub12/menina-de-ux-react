import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Telegram } from "react-bootstrap-icons";
import AllImages from "../../utils/AllImages";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const ods = [
    {
      href: "https://brasil.un.org/pt-br/sdgs/4",
      src: { imagem: AllImages.Ods4 },
      alt: "Ods 4 - Educação de Qualidade",
    },
    {
      href: "https://brasil.un.org/pt-br/sdgs/5",
      src: { imagem: AllImages.Ods5 },
      alt: "Ods 5 - Igualdade de Gênero",
    },
  ];

  const projetos = [
    {
      href: "/criando-seu-case",
      titulo: "Criando seu Case",
    },
  ];

  const sobre = [
    {
      href: "/sobre",
      titulo: "Conheça a iniciativa",
    },
    {
      href: "/becabelin",
      titulo: "Quem criou",
    },
  ];

  const redesSociais = [
    {
      title: "Instagram",
      href: "https://www.instagram.com/meninadeux",
      icon: <Instagram />,
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/company/meninadeux/",
      icon: <Linkedin />,
    },
    {
      title: "Telegram",
      href: "https://t.me/meninadeux",
      icon: <Telegram />,
    },
  ];

  return (
    <footer className="footer text-center text-lg-start text-muted">
      <Container className="text-center text-md-start mt-4">
        <Row className="row mt-3">
          <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
            <div className="logo">
              <img
                src={AllImages.HeaderLogo}
                alt="Logo Menina de UX"
                className="img-fluid"
              />
            </div>
            <p className="text-p">Ajudando meninas como eu</p>
            <div className="ods">
              <p className="text-ods">ODS apoiadas:</p>
              {ods.map((link, index) => {
                return (
                  <Link key={`${link}-${index}`} to={link.href} target="_blank">
                    <img
                      className="img-fluid"
                      src={link.src.imagem}
                      alt={link.alt}
                    />
                  </Link>
                );
              })}
            </div>
          </Col>

          <Col md={3} lg={4} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Projetos</h6>
            {projetos.map((projeto, index) => {
              return (
                <p key={`${projeto}-${index}`}>
                  <Link to={projeto.href} className="links">
                    {projeto.titulo}
                  </Link>
                </p>
              );
            })}
          </Col>

          <Col md={3} lg={4} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Sobre a <br></br> Menina de UX
            </h6>
            {sobre.map((link, index) => {
              return (
                <p key={`${link}-${index}`}>
                  <Link to={link.href} className="links">
                    {link.titulo}
                  </Link>
                </p>
              );
            })}
          </Col>

          <Col md={3} lg={4} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Redes sociais</h6>
            {redesSociais.map((link, index) => {
              return (
                <p className="links" key={`${link}-${index}`}>
                  <Link
                    to={link.href}
                    target="_blank"
                    className="links"
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                </p>
              );
            })}
          </Col>
        </Row>
      </Container>

      <div className="text-center p-4 copyright">
        Feito com 💙 por <span>Menina de UX</span>
        <p className="credits">
          Design e código por <Link to="becabelin">Rebeca Belin</Link>
        </p>
        <p className="credits">Ilustrações por Storyset</p>
      </div>
    </footer>
  );
}

export default Footer;
