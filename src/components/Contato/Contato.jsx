import React from "react";
import { Instagram, Linkedin, At } from "react-bootstrap-icons";
import "./Contato.css";

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
      <div className="container">
        <div className="row align-items-center">
          <div className="col" data-aos={AOS_FADE_UP}>
            <h1>Redes Sociais</h1>
            <p data-aos={AOS_FADE_UP}>
              Me acompanhe nas redes sociais! <br></br>Se quiser conversar sobre
              projetos, eventos e afins, tem meu e-mail aí!
            </p>
            {contatos.map((contato, index) => {
              return (
                <a
                  className="btn btn-primary"
                  key={`${contato}-${index}`}
                  data-aos={AOS_FADE_UP}
                  href={contato.href}
                  role="button"
                >
                  {contato.icone}
                  {contato.titulo}
                </a>
              );
            })}
          </div>

          <aside className="col img-fluid" data-aos={AOS_FADE_UP}>
            <img
              src="src/assets/img/mulher-redes-sociais.webp"
              className="img-fluid animated"
              width={"70%"}
              alt=""
              draggable="false"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contato;
