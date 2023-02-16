import React from "react";
import "./Cursos.css";

function Cursos() {
  const cursos = [
    {
      curso: "Curso em Vídeo",
      alternativeText: "Curso em Vídeo",
      src: "../src/assets/img/cursos/cursoemvideo.webp",
      href: "https://www.cursoemvideo.com/cursos/",
    },
    {
      curso: "Digital Innovation One",
      alternativeText: "Digital Innovation One",
      src: "../src/assets/img/cursos/dio.webp",
      href: "https://dio.me/sign-up?ref=U5U6LS080B",
    },
    {
      curso: "Estação Hack",
      alternativeText: "Estação Hack",
      src: "../src/assets/img/cursos/estacaohack.webp",
      href: "https://br.cellep.com/estacao-hack-sp/",
    },
    {
      curso: "Mundo SENAI",
      alternativeText: "Mundo SENAI",
      src: "../src/assets/img/cursos/mundosenai.webp",
      href: "https://loja.mundosenai.com.br",
    },
  ];

  return (
    <section id="cursos" className="cursos">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Cursos Tops</h2>
          <p>Os melhores em várias áreas</p>
        </div>
      </div>

      <div className="row justify-content-center">
        {cursos.map((curso, index) => {
          return (
            <div key={`${curso}-${index}`} className="post-box" data-aos="fade-up">
              <div className="post-img">
                <img
                  src={curso.src}
                  className="img-fluid"
                  draggable="false"
                  alt={curso.alternativeText}
                />
              </div>
              <h3 className="post-title">{curso.curso}</h3>
              <a
                href={curso.href}
                target="_blank"
                className="readmore stretched-link mt-auto"
              ></a>
            </div>
          );
        })}
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
          <h3 className="post-title">Bootcampinho UI/UX</h3>
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
          <h3 className="post-title">
            Capacitação Gratuita em Introdução à Programação
          </h3>
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
          <h3 className="post-title">6 cursos grátis da Gama Academy</h3>
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
          <h3 className="post-title">Cursos de TI da Prefeitura de BH</h3>
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
