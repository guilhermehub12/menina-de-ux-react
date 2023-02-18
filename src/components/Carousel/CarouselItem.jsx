import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

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
            <div className="container">
              <div className="row p-2">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last align-self-center">
                  <img
                    className="img-fluid"
                    src={carouselItem.imagemLink}
                    alt={carouselItem.alt}
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1">{carouselItem.titulo}</h1>
                    <p className="p">{carouselItem.descricao}</p>
                    <div className="text-lg-start" style={{ marginBottom: 30 }}>
                      <a href={carouselItem.botaoLink} className="btn-projeto">
                        {carouselItem.botaoTexto}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselItem;
