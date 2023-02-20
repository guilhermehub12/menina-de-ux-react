import React from "react";
import { Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./Cursos.css";

function Cursos() {
  const posts = {
    cursos: [
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
    ],
    processoSeletivo: [
      {
        src: "../src/assets/img/bootcamps/bootcampinhouiux.webp",
        alt: "Bootcampinho UI/UX",
        titulo: "Bootcampinho UI/UX",
        href: "https://maiane.com.br/bootcampinho-ui-ux-design/",
      },
      {
        src: "../src/assets/img/bootcamps/proztecnologia.webp",
        alt: "Capacitação Gratuita em Introdução à Programação",
        titulo: "Capacitação Gratuita em Introdução à Programação",
        subTitulo: "Inscrições por tempo limitado!",
        href: "https://pages.prozeducacao.com.br/proz-tecnologia/",
      },
      {
        src: "../src/assets/img/bootcamps/gamaacademy.webp",
        alt: "6 cursos grátis da Gama Academy",
        titulo: "6 cursos grátis da Gama Academy",
        href: "https://app.gama.academy/jornada/e55b1f-semana-de-rebranding/",
      },
      {
        src: "../src/assets/img/bootcamps/cursosprefeituradebh.webp",
        alt: "Cursos de TI da Prefeitura de BH",
        titulo: "Cursos de TI da Prefeitura de BH",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSc9Q6G2A5yakCrGfUaqUFrIH63WYw4Tguo1MpOmcSittFHasQ/viewform/",
      },
    ],
  };
  return (
    <section id="cursos" className="cursos-inicio">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Cursos Tops</h2>
          <p>Os melhores em várias áreas</p>
        </div>
      </div>

      <div className="row justify-content-center">
        {posts.cursos.map((curso, index) => {
          return (
            <div
              key={`${curso}-${index}`}
              className="post-box"
              data-aos="fade-up"
            >
              <div className="post-img">
                <img
                  src={curso.src}
                  className="img-fluid"
                  width={"100%"}
                  draggable="false"
                  alt={curso.alternativeText}
                />
              </div>
              <h3 className="post-title">{curso.curso}</h3>
              <Link
                to={curso.href}
                target="_blank"
                className="readmore stretched-link mt-auto"
              ></Link>
            </div>
          );
        })}
      </div>

      <div className="text-center text-lg-start">
        <Link to="/cursos" className="btn-ver-todos">
          Descobrir mais cursos
        </Link>
      </div>

      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Últimos Processos Seletivos</h2>
          <p>Para você ser o melhor no que faz</p>
        </div>
      </div>

      <Row className="justify-content-center">
        {posts.processoSeletivo.map((processo, index) => {
          return (
            <div key={`${processo}-${index}`} className="post-box cursos-item filter-design">
              <div className="post-img">
                <img
                  src={processo.src}
                  className="img-fluid"
                  draggable="false"
                  alt={processo.alt}
                />
              </div>
              <h3 className="post-title">{processo.titulo}</h3>
              <p className="post-date">{processo.subTitulo}</p>
              <Link
                to={processo.href}
                target="_blank"
                className="readmore stretched-link mt-auto"
              >
                <span>Saiba mais</span>
                <ArrowRight className="seta" />
              </Link>
            </div>
          );
        })}
      </Row>

      <div className="text-center text-lg-start">
        <Link to="/bootcamps" className="btn-ver-todos">
          Ver mais
        </Link>
      </div>
    </section>
  );
}

export default Cursos;
