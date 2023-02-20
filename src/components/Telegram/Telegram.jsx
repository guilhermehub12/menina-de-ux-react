import React from "react";
import "./Telegram.css"

function Telegram() {
  return (
    <section id="telegram" className="telegram">
      <div className="container">
        <div className="row align-items-center">
          <div className="col align-items-center" data-aos="fade-up">
            <h1>Quer ficar por dentro de todas as novidades?</h1>
            <p>
              Entre no canal do Telegram da Menina de UX e fique sabendo de
              todos os cursos e processos seletivos novos!
            </p>
            <div className="text-center text-lg-start">
              <a
                href="https://t.me/meninadeux"
                target="_blank"
                className="btn-quero-apoiar"
              >
                Entrar no canal
              </a>
            </div>
          </div>
          <div className="col align-items-center img-fluid" data-aos="fade-up">
            <img
              src="src/assets/img/mulher-recebendo-novidades.webp"
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

export default Telegram;
