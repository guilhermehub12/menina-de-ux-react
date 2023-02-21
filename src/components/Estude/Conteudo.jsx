import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllImages from "../../utils/AllImages.js";

function Conteudos() {
  const miniCursos = [
    {
      src: { image: AllImages.Curriculo },
      alt: "Currículo de Milhões",
      titulo: "Currículo de Milhões",
      descricao:
        "Aprenda a criar o currículo campeão para enviar nos processos seletivos e descubra coisas super importantes que você não sabia antes!",
      btnHref: "#",
      btnClass: "btn-em-breve-2",
      btnTitulo: "Em Breve",
    },
    {
      src: { image: AllImages.ConexoesLinkedin },
      alt: "O poder do LinkedIn",
      titulo: "O poder do LinkedIn",
      descricao:
        "Tudo sobre a maior rede profissional de todas e as melhores dicas para deixar o seu perfil atrativo para recrutadores!",
      btnHref: "#",
      btnClass: "btn-em-breve-2",
      btnTitulo: "Em Breve",
    },
    {
      src: { image: AllImages.PreenchendoPostIts },
      alt: "Card Sorting",
      titulo: "Card Sorting",
      descricao:
        "Conheça mais sobre essa ferramenta bastante utilizada durante para trabalhar a arquitetura de informação de um site ou aplicativo!",
      btnHref: "/mini-cursos/card-sorting",
      btnClass: "btn-projeto",
      btnTitulo: "Ver mais",
    },
    {
      src: { image: AllImages.CasalJuntandoQuebraCabecas },
      alt: "Proposta de Valor",
      titulo: "Proposta de Valor",
      descricao:
        "O que é, como fazer e como ela pode mudar o seu negócio. Hoje, no Menina de UX repórter!",
      btnHref: "/mini-cursos/proposta-de-valor",
      btnClass: "btn-projeto",
      btnTitulo: "Ver mais",
    },
  ];

  return (
    <Container>
      <Row
        className="justify-content-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {miniCursos.map((item, index) => {
          return (
            <div className="post-box" key={`${item}-${index}`}>
              <div className="post-img">
                <img src={item.src.image} draggable="false" alt={item.alt} />
              </div>
              <h1 className="post-title">{item.titulo}</h1>
              <p className="description">{item.descricao}</p>
              <div className="text-center text-lg-start">
                <Link to={item.btnHref} className={item.btnClass}>
                  {item.btnTitulo}
                </Link>
              </div>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default Conteudos;
