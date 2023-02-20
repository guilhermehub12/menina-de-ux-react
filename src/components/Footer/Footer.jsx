import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Telegram } from "react-bootstrap-icons";
import "./Footer.css";

function Footer() {
  const ods = [
    {
      href: "https://brasil.un.org/pt-br/sdgs/4",
      src: "../src/assets/img/ods-4.webp",
      alt: "Ods 4 - Educação de Qualidade",
    },
    {
      href: "https://brasil.un.org/pt-br/sdgs/5",
      src: "../src/assets/img/ods-5.webp",
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
      <div className="container text-center text-md-start mt-4">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <div className="logo">
              <img
                src="../src/assets/img/header-logo.webp"
                alt="Logo Menina de UX"
                className="img-fluid"
              />
            </div>
            <p className="text-p">Ajudando meninas como eu</p>
            <div className="ods">
              <p className="text-ods">ODS apoiadas:</p>
              {ods.map((link, index) => {
                return (
                  <Link
                    key={`${link}-${index}`}
                    to={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="img-fluid" src={link.src} alt={link.alt} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
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
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Sobre a Menina de UX
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
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Redes sociais</h6>
            {redesSociais.map((link, index) => {
              return (
                <p className="links" key={`${link}-${index}`}>
                  <Link
                    to={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="links"
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                </p>
              );
            })}
          </div>
        </div>
      </div>

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