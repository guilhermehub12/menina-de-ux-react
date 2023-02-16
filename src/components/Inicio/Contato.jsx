import React from "react";
import "./Contato.css";

function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <div className="row align-items-center">
          <div className="col align-items-center" data-aos="fade-up">
            <h1>Redes Sociais</h1>
            <p data-aos="fade-up">
              Me acompanhe nas redes sociais! <br></br>Se quiser conversar sobre
              projetos, eventos e afins, tem meu e-mail aí!
            </p>

            <a
              className="btn btn-primary"
              data-aos="fade-up"
              href="mailto:becabelin@gmail.com"
              role="button"
            >
              <i className="fa-solid fa-at me-2"></i>E-mail
            </a>
            <a
              className="btn btn-primary"
              data-aos="fade-up"
              href="https://www.instagram.com/meninadeux"
              role="button"
            >
              <i className="fab fa-instagram me-2"></i>Instagram
            </a>
            <a
              className="btn btn-primary"
              data-aos="fade-up"
              href="https://www.LinkedIn.com/company/meninadeux"
              role="button"
            >
              <i className="fab fa-LinkedIn me-2"></i>LinkedIn
            </a>
          </div>

          <div className="col align-items-center img-fluid" data-aos="fade-up">
            <img
              src="src/assets/img/mulher-redes-sociais.webp"
              className="img-fluid animated"
              alt=""
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
