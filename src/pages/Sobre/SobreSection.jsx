import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AllImages from "../../utils/AllImages";

function SobreSection() {
  return (
    <>
      <section id="sobre" className="sobre">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="align-items-center" data-aos="fade-up">
              <img
                src={AllImages.MulherAcenando}
                className="img-fluid animated"
                style={{ width: "80%" }}
                alt=""
                draggable="false"
              />
            </Col>
            <Col className="align-items-center" data-aos="fade-up">
              <h1>Primeiramente, seja bem vindo(a)!</h1>
              <p>
                Fico muito feliz pois sei que, se você chegou até essa página, é
                porque quer saber mais sobre o projeto <b>Menina de UX</b>.
                Significa muito para mim!
              </p>
              <p>Vou te contar um pouquinho da minha história!</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="sobre"
        className="sobre"
        style={{ backgroundColor: "#f5c5d240" }}
      >
        <Container>
          <Row className="align-items-center">
            <Col className="align-items-center" data-aos="fade-up">
              <h1>Tudo começou em 2021...</h1>
              <p>
                Quando entrei na área de UI/UX Design, fiquei apaixonada e
                queria muito poder <b>mostrar os meus trabalhos</b> por aí, além
                de que eu seguia <b>profissionais da área</b> no LinkedIn e
                adorava as dicas que eles davam
              </p>
              <p>
                Então decidi criar um perfil no instagram para poder exibir meus
                projetos e também ensinar coisas para as pessoas
              </p>
              <p>
                Depois de dias pensando num nome legal, cheguei em{" "}
                <b>Menina de UX</b> e adorei!
              </p>
            </Col>
            <Col md={4} className="align-items-center" data-aos="fade-up">
              <img
                src={AllImages.MulherEstudando}
                className="img-fluid animated"
                style={{ width: "80%" }}
                alt=""
                draggable="false"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="sobre" className="sobre">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="align-items-center" data-aos="fade-up">
              <img
                src={AllImages.MulherLendo}
                className="img-fluid animated"
                style={{ width: "80%" }}
                alt=""
                draggable="false"
              />
            </Col>
            <Col className="align-items-center" data-aos="fade-up">
              <h1>Só que eu queria mais que isso</h1>
              <p>
                Com o tempo, fui percebendo que eu sempre gostei de educação e
                queria ser uma influência nessa área, poder ajudar outras
                pessoas com o que eu sabia (e ainda ia aprender)
              </p>
              <p>
                Foquei para que a Menina de UX desse dicas e ensinasse coisas
                legais sobre design e carreira
              </p>
              <p>E hoje estou aqui, contando essa história para você!</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SobreSection;
