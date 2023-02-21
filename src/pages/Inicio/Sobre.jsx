import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllImages from "../../utils/AllImages";
import "./Sobre.css";

function Sobre() {
  return (
    <section id="sobre" className="sobre-inicio">
      <Container>
        <Row className="align-items-center">
          <Col className="align-items-center" data-aos="fade-up">
            <img
              src={AllImages.Aprovado}
              className="img-fluid animated"
              alt=""
              draggable="false"
            />
          </Col>
          <Col className="align-items-center" data-aos="fade-up">
            <h2>Comece Link sua carreira</h2>
            <p>
              Aprenda mais sobre Link área de tech e design, tenha acesso Link
              conteúdos incríveis e entre no mercado de trabalho com chave de
              ouro!
            </p>
            <div className="text-center text-lg-start">
              <Link to="/estude" className="btn-quero-apoiar">
                Estude com Link Menina de UX!
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center">
          <Col className="align-items-center" data-aos="fade-up">
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
              <Link
                to="/criando-seu-case"
                target="_blank"
                className="btn-quero-apoiar"
              >
                Crie seu primeiro projeto!
              </Link>
              <Link
                to="https://www.Figma.com/community/file/1093593396148585854"
                target="_blank"
                className="btn-quero-apoiar-2"
              >
                Baixar template
              </Link>
            </div>
          </Col>
          <Col className="align-items-center img-fluid" data-aos="fade-up">
            <img
              src={AllImages.MulherDesigner}
              className="img-fluid animated"
              alt=""
              draggable="false"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Sobre;
