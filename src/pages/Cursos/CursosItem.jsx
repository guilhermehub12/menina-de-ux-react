import React from "react";
import { CursosFilters } from "../../utils/CursosFilters";
import { CursosItems } from "../../utils/CursosItems";
import FilterItems from "../../components/Filters/FilterItems";
import FilterOptions from "../../components/Filters/FilterOptions";
import "./CursosItem.css";
import { Container } from "react-bootstrap";

function CursosItem() {
  return (
    <section id="cursos" className="cursos">
      <Container className="cursos-container">
        <FilterOptions props={CursosFilters} />
        <FilterItems props={CursosItems} />
      </Container>
    </section>
  );
}

export default CursosItem;
