import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div data-aos="zoom-out">
              <h1>Cursinhos Tops e Gratuitos</h1>
              <p>Os melhores de tech (e outras áreas, hein)</p>
              <p>
                Você pode filtrar os cursos por uma área específica, <br></br>
                mas tem sites que têm todos os tipos de cursos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
