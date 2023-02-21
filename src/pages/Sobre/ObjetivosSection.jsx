import React from "react";
import AllImages from "../../utils/AllImages";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselItem from "../../components/Carousel/CarouselItem";

function ObjetivosSection() {
  const carouselItems = [
    {
      imagemLink: { imagem: AllImages.MeninaAssistindoAula },
      alt: "",
      titulo: "Ensinar e trazer conteúdos incríveis",
      descricao:
        "A Menina de UX busca poder ajudar meninas que queiram começar suas carreiras em design e/ou tecnologia",
      subTitle: "Por quê?",
      subdescricao:
        "Porque ela acredita que qualquer menina pode ser o que quiser e que podemos aprender qualquer coisa",
      subsubTitle: "Como?",
      subsubdescricao:
        "Criando aulas, apostilas e conteúdos sobre UX e carreira de forma totalmente gratuita e online!",
    },
    {
      imagemLink: { imagem: AllImages.Certificado },
      alt: "",
      titulo: "Levar ensino gratuito e de qualidade para todos",
      descricao:
        "O site da Menina de UX é uma das maiores bibliotecas de cursos gratuitos, além de estar por dentro de processos seletivos para cursos de tecnologia em grandes empresas",
      subdescricao: `Além disso, as pessoas podem ficar por dentro de lançamentos de cursos em tempo real graças ao ${<Link to="https://t.me/meninadeux" target="_blank">Canal no Telegram </Link>}`,
    },
    {
      imagemLink: { imagem: AllImages.HomemComCofrinho },
      alt: "",
      titulo: "Trazer economia",
      descricao:
        "Com a divulgação de cursos, processos seletivos e a criação das aulas e apostilas, acaba não sendo necessário (a não ser que você queira fazer) comprar um curso caríssimo",
      subdescricao:
        "As únicas coisas em que você vai precisar investir são o seu tempo e o seu esforço!",
    },
    {
      imagemLink: { imagem: AllImages.GirlPower },
      alt: "",
      titulo: "Capacitar jovens meninas",
      descricao:
        "Ajudando meninas como eu, quero poder trazer mais meninas para o mundo da tecnologia e transformar artistas de telinhas em UI/UX Designers!",
    },
  ];

  return (
    <>
      <section id="hero" className="hero-carousel">
        <Row>
          <Col
            md={6}
            lg={12}
            className="d-flex flex-column justify-content-center"
          >
            <h1
              data-aos="fade-up"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              Objetivos da Menina de UX
            </h1>
          </Col>
        </Row>
      </section>

      <section
        id="carousel"
        className="carousel"
        style={{ backgroundColor: "rgba(245, 197, 210, 0.25)" }}
      >
        {/* carousel */}
        <Container>
          <CarouselItem props={carouselItems} />
        </Container>
      </section>
    </>
  );
}

export default ObjetivosSection;
