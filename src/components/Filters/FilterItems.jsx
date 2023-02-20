import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";

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
                src={item.imageLink}
                className="img-fluid"
                draggable="false"
                alt={item.imageAlt}
              />
            </div>
            <h1 className="post-title">{item.postTitle}</h1>
            <p className="post-date">{item.postOptional}</p>
            <p className="description">{item.postContent}</p>
            <a
              href={item.postLink}
              target="_blank"
              rel="noopener noreferrer"
              className="readmore stretched-link mt-auto"
            >
              <span>Saiba mais</span>
              <ArrowRight />
            </a>
          </Col>
        );
      })}
    </Row>
  );
}

export default FilterItems;
