import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              Estude com a <br></br>Menina de UX
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              Aprenda sobre carreira, currículo, design e tecnologia com os
              vários conteúdos gratuitos aqui!
            </p>
          </div>
          <div
            className="col-lg-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src="src/assets/img/mulher-estudando-2.webp"
              className="img-fluid"
              width={"70%"}
              alt="Ilustração de uma mulher estudando"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
