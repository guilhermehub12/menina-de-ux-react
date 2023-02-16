import "./Sobre.css";

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <div className="row align-items-center">
          <div className="col align-items-center" data-aos="fade-up">
            <img
              src="src/assets/img/aprovado.webp"
              className="img-fluid animated"
              alt=""
              draggable="false"
            />
          </div>
          <div className="col align-items-center" data-aos="fade-up">
            <h1>Comece a sua carreira</h1>
            <p>
              Aprenda mais sobre a área de tech e design, tenha acesso a
              conteúdos incríveis e entre no mercado de trabalho com chave de
              ouro!
            </p>
            <div className="text-center text-lg-start">
              <a href="estudos.html" className="btn-quero-apoiar">
                Estude com a Menina de UX!
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col align-items-center" data-aos="fade-up">
            <h2>
              Crie seu primeiro projeto<br></br> em UX Design
            </h2>
            <p>
              Com um template no Figma e os posts de guia, você vai conseguir se
              guiar para construir o seu case do zero!
            </p>
            <p>
              Clique agora no botão abaixo e faça o download do template no
              Figma!
            </p>
            <div className="text-center text-lg-start">
              <a
                href="/criando-seu-case/index.html"
                target="_blank"
                className="btn-quero-apoiar"
              >
                Crie seu primeiro projeto!
              </a>
              <a
                href="https://www.Figma.com/community/file/1093593396148585854"
                target="_blank"
                className="btn-quero-apoiar-2"
              >
                Baixar template
              </a>
            </div>
          </div>
          <div className="col align-items-center img-fluid" data-aos="fade-up">
            <img
              src="src/assets/img/mulher-designer.webp"
              className="img-fluid animated"
              alt=""
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
