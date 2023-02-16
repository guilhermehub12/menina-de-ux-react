import React from "react";
import { Instagram, Linkedin, At } from "react-bootstrap-icons"
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
              <At width={32} fontWeight={900} />
              E-mail
            </a>
            <a
              className="btn btn-primary"
              data-aos="fade-up"
              href="https://www.instagram.com/meninadeux"
              role="button"
            >
              <Instagram width={32} />
              Instagram
            </a>
            <a
              className="btn btn-primary"
              data-aos="fade-up"
              href="https://www.LinkedIn.com/company/meninadeux"
              role="button"
            >
              <Linkedin width={32} />
              LinkedIn
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
