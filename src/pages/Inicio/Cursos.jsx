import React from "react";
import { Container, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import CursosImages from "../../utils/CursosImages";
import BootcampsImages from "../../utils/BootcampsImages";
import "./Cursos.css";

function Cursos() {
  const posts = {
    cursos: [
      {
        curso: "Curso em Vídeo",
        alternativeText: "Curso em Vídeo",
        src: { imagem: CursosImages.cursoemvideo },
        href: "https://www.cursoemvideo.com/cursos/",
      },
      {
        curso: "Digital Innovation One",
        alternativeText: "Digital Innovation One",
        src: { imagem: CursosImages.dio },
        href: "https://dio.me/sign-up?ref=U5U6LS080B",
      },
      {
        curso: "Estação Hack",
        alternativeText: "Estação Hack",
        src: { imagem: CursosImages.estacaohack },
        href: "https://br.cellep.com/estacao-hack-sp/",
      },
      {
        curso: "Mundo SENAI",
        alternativeText: "Mundo SENAI",
        src: { imagem: CursosImages.mundosenai },
        href: "https://loja.mundosenai.com.br",
      },
    ],
    processoSeletivo: [
      {
        src: { imagem: BootcampsImages.bootcampinhouiux },
        alt: "Bootcampinho UI/UX",
        titulo: "Bootcampinho UI/UX",
        href: "https://maiane.com.br/bootcampinho-ui-ux-design/",
      },
      {
        src: { imagem: BootcampsImages.proztecnologia },
        alt: "Capacitação Gratuita em Introdução à Programação",
        titulo: "Capacitação Gratuita em Introdução à Programação",
        subTitulo: "Inscrições por tempo limitado!",
        href: "https://pages.prozeducacao.com.br/proz-tecnologia/",
      },
      {
        src: { imagem: BootcampsImages.gamaacademy },
        alt: "6 cursos grátis da Gama Academy",
        titulo: "6 cursos grátis da Gama Academy",
        href: "https://app.gama.academy/jornada/e55b1f-semana-de-rebranding/",
      },
      {
        src: { imagem: BootcampsImages.cursosprefeituradebh },
        alt: "Cursos de TI da Prefeitura de BH",
        titulo: "Cursos de TI da Prefeitura de BH",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSc9Q6G2A5yakCrGfUaqUFrIH63WYw4Tguo1MpOmcSittFHasQ/viewform/",
      },
    ],
  };
  return (
    <section id="cursos" className="cursos-inicio">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Cursos Tops</h2>
          <p>Os melhores em várias áreas</p>
        </div>
      </Container>

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
                  src={curso.src.imagem}
                  className="img-fluid"
                  width={"100%"}
                  draggable="false"
                  alt={curso.alternativeText}
                />
              </div>
              
              <Link
                to={curso.href}
                target="_blank"
                className="readmore stretched-link mt-auto"
              ><h3 className="post-title">{curso.curso}</h3></Link>
            </div>
          );
        })}
      </div>

      <div className="text-center text-lg-start">
        <Link to="/cursos" className="btn-ver-todos">
          Descobrir mais cursos
        </Link>
      </div>

      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Últimos Processos Seletivos</h2>
          <p>Para você ser o melhor no que faz</p>
        </div>
      </Container>

      <Row className="justify-content-center">
        {posts.processoSeletivo.map((processo, index) => {
          return (
            <div
              key={`${processo}-${index}`}
              className="post-box cursos-item filter-design"
            >
              <div className="post-img">
                <img
                  src={processo.src.imagem}
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
