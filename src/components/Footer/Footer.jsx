import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer text-center text-lg-start text-muted">
      <div className="container text-center text-md-start mt-4">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <div className="logo">
              <img
                src="src/assets/img/header-logo.webp"
                alt=""
                className="img-fluid"
              />
            </div>
            <p className="text-p">Ajudando meninas como eu</p>
            <div className="ods">
              <p className="text-ods">ODS apoiadas:</p>
              <a href="https://brasil.un.org/pt-br/sdgs/4" target="_blank">
                <img
                  className="img-fluid"
                  src="src/assets/img/ods-4.webp"
                  alt="ods 4 - educação de qualidade"
                />
              </a>
              <a href="https://brasil.un.org/pt-br/sdgs/5" target="_blank">
                <img
                  className="img-fluid"
                  src="src/assets/img/ods-5.webp"
                  alt="ods 5 - igualdade de gênero"
                />
              </a>
            </div>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Projetos</h6>
            <p>
              <a href="/criando-seu-case/index.html" className="links">
                Crie seu Case
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Sobre a Menina de UX
            </h6>
            <p>
              <a href="/sobre.html" target="_blank" className="links">
                Conheça a iniciativa
              </a>
            </p>
            <p>
              <a href="/becabelin.html" target="_blank" className="links">
                Quem criou
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Redes sociais</h6>
            <p className="links">
              <a
                href="https://www.instagram.com/meninadeux"
                className="links"
                target="_blank"
              >
                <i className="fa-brands fa-instagram me-2"></i>Instagram
              </a>
            </p>
            <p className="links">
              <a
                href="https://www.LinkedIn.com/company/meninadeux"
                className="links"
                target="_blank"
              >
                <i className="fa-brands fa-LinkedIn me-2"></i>LinkedIn
              </a>
            </p>
            <p className="links">
              <a
                href="https://t.me/meninadeux"
                className="links"
                target="_blank"
              >
                <i className="fa-brands fa-telegram me-2"></i>Telegram
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center p-4 copyright">
        Feito com 💙 por <span>Menina de UX</span>
        <p className="credits">
          Design e código por{" "}
          <a href="becabelin.html" target="_blank">
            Rebeca Belin
          </a>
        </p>
        <p className="credits">Ilustrações por Storyset</p>
      </div>
    </footer>
  );
}

export default Footer;
