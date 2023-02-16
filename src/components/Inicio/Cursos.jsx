import React from "react";
import "./Cursos.css";

function Cursos() {
  return (
    <section id="cursos" className="cursos">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Cursos Tops</h2>
          <p>Os melhores em várias áreas</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="post-box" data-aos="fade-up">
          <div className="post-img">
            <img
              src="src/assets/img/cursos/cursoemvideo.webp"
              className="img-fluid"
              draggable="false"
              alt="Curso em Vídeo"
            />
          </div>
          <h1 className="post-title">Curso em Vídeo</h1>
          <a
            href="https://www.cursoemvideo.com/cursos/"
            target="_blank"
            className="readmore stretched-link mt-auto"
          ></a>
        </div>

        <div className="post-box" data-aos="fade-up">
          <div className="post-img">
            <img
              src="src/assets/img/cursos/dio.webp"
              className="img-fluid"
              draggable="false"
              alt="Digital Innovation One"
            />
          </div>
          <h1 className="post-title">Digital Innovation One</h1>
          <a
            href="https://dio.me/sign-up?ref=U5U6LS080B"
            target="_blank"
            className="readmore stretched-link mt-auto"
          ></a>
        </div>

        <div className="post-box" data-aos="fade-up">
          <div className="post-img">
            <img
              src="src/assets/img/cursos/estacaohack.webp"
              className="img-fluid"
              alt="Estação Hack"
              draggable="false"
            />
          </div>
          <h1 className="post-title">Estação Hack</h1>
          <a
            href="https://br.cellep.com/estacao-hack-sp/"
            target="_blank"
            className="readmore stretched-link mt-auto"
          ></a>
        </div>

        <div className="post-box" data-aos="fade-up">
          <div className="post-img">
            <img
              src="src/assets/img/cursos/mundosenai.webp"
              className="img-fluid"
              draggable="false"
              alt="Mundo SENAI"
            />
          </div>
          <h1 className="post-title">Mundo SENAI</h1>
          <a
            href="https://loja.mundosenai.com.br"
            target="_blank"
            className="readmore stretched-link mt-auto"
          ></a>
        </div>
      </div>

      <div className="text-center text-lg-start">
        <a href="cursos.html" className="btn-ver-todos">
          Descobrir mais cursos
        </a>
      </div>

      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Últimos Processos Seletivos</h2>
          <p>Para você ser o melhor no que faz</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="post-box cursos-item filter-design">
          <div className="post-img">
            <img
              src="src/assets/img/bootcamps/bootcampinhouiux.webp"
              className="img-fluid"
              draggable="false"
              alt="Bootcampinho UI/UX"
            />
          </div>
          <h1 className="post-title">Bootcampinho UI/UX</h1>
          <a
            href="https://maiane.com.br/bootcampinho-ui-ux-design/"
            target="_blank"
            className="readmore stretched-link mt-auto"
          >
            <span>Saiba mais</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="post-box cursos-item filter-back-end">
          <div className="post-img">
            <img
              src="src/assets/img/bootcamps/proztecnologia.webp"
              className="img-fluid"
              draggable="false"
              alt="Capacitação Gratuita em Introdução à Programação"
            />
          </div>
          <h1 className="post-title">
            Capacitação Gratuita em Introdução à Programação
          </h1>
          <p className="post-date">Inscrições por tempo limitado!</p>
          <a
            href="https://pages.prozeducacao.com.br/proz-tecnologia"
            target="_blank"
            className="readmore stretched-link mt-auto"
          >
            <span>Saiba mais</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="post-box cursos-item filter-active">
          <div className="post-img">
            <img
              src="src/assets/img/bootcamps/gamaacademy.webp"
              className="img-fluid"
              draggable="false"
              alt="6 cursos grátis da Gama Academy"
            />
          </div>
          <h1 className="post-title">6 cursos grátis da Gama Academy</h1>
          <a
            href="https://app.gama.academy/jornada/e55b1f-semana-de-rebranding/"
            target="_blank"
            className="readmore stretched-link mt-auto"
          >
            <span>Saiba mais</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        <div className="post-box cursos-item filter-active">
          <div className="post-img">
            <img
              src="src/assets/img/bootcamps/cursosprefeituradebh.webp"
              className="img-fluid"
              draggable="false"
              alt="Cursos de TI da Prefeitura de BH"
            />
          </div>
          <h1 className="post-title">Cursos de TI da Prefeitura de BH</h1>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc9Q6G2A5yakCrGfUaqUFrIH63WYw4Tguo1MpOmcSittFHasQ/viewform"
            target="_blank"
            className="readmore stretched-link mt-auto"
          >
            <span>Saiba mais</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className="text-center text-lg-start">
        <a href="bootcamps.html" className="btn-ver-todos">
          Ver mais
        </a>
      </div>
    </section>
  );
}

export default Cursos;
