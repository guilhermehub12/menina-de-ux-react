import React from "react";

function Conteudos() {
  return (
    <div className="conteudos-container">
      <div
        className="row justify-content-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="post-box">
          <div className="post-img">
            <img
              src="src/assets/img/curriculo.webp"
              draggable="false"
              alt="Currículo de Milhões"
            />
          </div>
          <h1 className="post-title">Currículo de Milhões</h1>
          <p className="description">
            Aprenda a criar o currículo campeão para enviar nos processos
            seletivos e descubra coisas super importantes que você não sabia
            antes!
          </p>
          <div className="text-center text-lg-start">
            <a className="btn-em-breve-2">Em breve</a>
          </div>
        </div>

        <div className="post-box">
          <div className="post-img">
            <img
              src="src/assets/img/conexoes-linkedin.webp"
              draggable="false"
              alt="O poder do LinkedIn"
            />
          </div>
          <h1 className="post-title">O Poder do LinkedIn</h1>
          <p className="description">
            Tudo sobre a maior rede profissional de todas e as melhores dicas
            para deixar o seu perfil atrativo para recrutadores!
          </p>
          <div className="text-center text-lg-start">
            <a className="btn-em-breve-2">Em breve</a>
          </div>
        </div>

        <div className="post-box">
          <div className="post-img">
            <img
              src="src/assets/img/preenchendo-post-its.webp"
              draggable="false"
              alt="Card Sorting"
            />
          </div>
          <h1 className="post-title">Card Sorting</h1>
          <p className="description">
            Conheça mais sobre essa ferramenta bastante utilizada durante para
            trabalhar a arquitetura de informação de um site ou aplicativo!
          </p>
          <div className="text-center">
            <a href="mini-cursos/card-sorting.html" className="btn-projeto">
              Ver mais
            </a>
          </div>
        </div>

        <div className="post-box">
          <div className="post-img">
            <img
              src="src/assets/img/homem-e-mulher-juntando-quebra-cabecas.webp"
              draggable="false"
              alt="Proposta de Valor"
            />
          </div>
          <h1 className="post-title">Proposta de Valor</h1>

          <p className="description">
            O que é, como fazer e como ela pode mudar o seu negócio. Hoje, no
            Menina de UX repórter!
          </p>
          <div className="text-center">
            <a href="mini-cursos/proposta-de-valor.html" className="btn-projeto">
              Ver mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conteudos;
