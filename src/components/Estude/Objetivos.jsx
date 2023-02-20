import React from "react";
import "./Objetivos.css";
import CarouselItem from "../Carousel/CarouselItem.jsx";

function Objetivos() {
  const carouselItems = [
    {
      imagemLink: "../src/assets/img/fazer-user-flow.webp",
      alt: "Ilustração de uma menina olhando para trás navegando em um smarthphone grande",
      titulo: "Criando seu Case",
      descricao: "Com um template no Figma, os posts de guia e os conteúdos que você só encontra com a Menina de UX, você vai conseguir se guiar para construir o seu case do zero!",
      botaoLink: "/criando-seu-case",
      botaoTexto: "Crie seu primeiro projeto!",
    },
    {
      imagemLink: "../src/assets/img/equipe-designers.webp",
      alt: "Ilustração de três pessoa, o da esquerda segura um lápis grande, a do meio segura um notebook e a terceira segura algo parecido com uma caneta de tinta",
      titulo: "Carreiras em UX",
      descricao: "Com um template no Figma, os posts de guia e os conteúdos que você só encontra com a Menina de UX, você vai conseguir se guiar para construir o seu case do zero!",
      botaoLink: "/carreiras-em-ux",
      botaoTexto: "Conheça as carreiras!",
    },
  ];

  return (
    <section id="carousel" className="carousel">
      <div className="container">
        <CarouselItem props={carouselItems} />
      </div>
    </section>
  );
}

export default Objetivos;
