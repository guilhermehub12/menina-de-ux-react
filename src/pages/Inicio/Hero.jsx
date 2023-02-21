import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllImages from "../../utils/AllImages";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-inicio">
      <Container>
        <Row>
          <Col lg={6} className="d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              Ajudando meninas<br></br> como eu
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              Encontre os melhores cursos e processos seletivos na área de
              tecnologia e ainda aprenda sobre o mundo do UX Design!
            </p>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <Link to="/cursos" className="btn-descobrir-cursos">
                  Descobrir cursos
                </Link>
                <Link to="/bootcamps" className="btn-descobrir-processos">
                  Processos Seletivos
                </Link>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            className="hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={AllImages.MulherEstudando} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
