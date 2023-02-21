import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function CarouselItem({ props }) {
  return (
    <Carousel
      nextIcon={
        <ChevronRight className="carousel-control-next text-decoration-none w-auto ps-3" />
      }
      prevIcon={
        <ChevronLeft className="carousel-control-prev text-decoration-none w-auto ps-3" />
      }
      data-aos="fade-up"
    >
      {props.map((carouselItem, index) => {
        return (
          <Carousel.Item key={index}>
            <Container>
              <Row className="p-2">
                <Col
                  md={8}
                  lg={6}
                  className="mx-auto order-lg-last align-self-center"
                >
                  <img
                    style={{ width: "80%" }}
                    className="img-fluid"
                    src={carouselItem.imagemLink.imagem}
                    alt={carouselItem.alt}
                  />
                </Col>
                <Col md={8} lg={6} className="mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1">{carouselItem.titulo}</h1>
                    <p className="p">{carouselItem.descricao}</p>
                    <h2 className="h2">{carouselItem.subTitle}</h2>
                    <p className="p">{carouselItem.subdescricao}</p>
                    <h2 className="h2">{carouselItem.subsubTitle}</h2>
                    <p className="p">{carouselItem.subsubdescricao}</p>
                    <div className="text-lg-start" style={{ marginBottom: 30 }}>
                      <Link to={carouselItem.botaoLink} className="btn-projeto">
                        {carouselItem.botaoTexto}
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselItem;
