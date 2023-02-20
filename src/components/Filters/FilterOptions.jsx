import React, { useState, useRef } from "react";
import { Row, Col, Nav, NavItem } from "react-bootstrap";

function FilterOptions({props}) {
  const [activeFilter, setActiveFilter] = useState("*");
  const cursosIsotope = useRef(null);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    cursosIsotope.current.arrange({ filter });
  };
  return (
    <Row className="justify-content-center" data-aos-delay="100">
      <Col lg={12} className="d-flex justify-content-center">
        <Nav id="cursos-filters">
          {props.map((filter, index) => {
            return (
              <NavItem
                key={`${filter}-${index}`}
                className={`cursos-filters-items ${
                  activeFilter === filter.filter ? "filter-active" : ""
                }`}
                data-filter={filter.filter}
                onClick={() => handleFilterClick(filter.filter)}
              >
                {filter.titulo}
              </NavItem>
            );
          })}
        </Nav>
      </Col>
    </Row>
  );
}

export default FilterOptions;
