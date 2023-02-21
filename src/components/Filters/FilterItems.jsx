import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function FilterItems({ props }) {
  return (
    <Row className="justify-content-center" data-aos-delay="200">
      {props.map((item, index) => {
        return (
          <Col
            md={4}
            key={`${item}-${index}`}
            className={`post-box cursos-item filter-${item.filter}`}
          >
            <div className="post-img">
              <img
                src={item.imageLink.imagem}
                className="img-fluid"
                draggable="false"
                alt={item.imageAlt}
              />
            </div>
            <h1 className="post-title">{item.postTitle}</h1>
            <p className="post-date">{item.postOptional}</p>
            <p className="description">{item.postContent}</p>
            <Link
              to={item.postLink}
              target="_blank"
              className="readmore stretched-link mt-auto"
            >
              <span>Saiba mais</span>
              <ArrowRight />
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}

export default FilterItems;
