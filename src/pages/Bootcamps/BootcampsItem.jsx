import React from "react";
import { BootcampsFilters } from "../../utils/BootcampsFilters";
import { BootcampsItems } from "../../utils/BootcampsItems";
import FilterItems from "../../components/Filters/FilterItems";
import FilterOptions from "../../components/Filters/FilterOptions";
import { Container } from "react-bootstrap";

function BootcampsItem() {
  return (
    <section id="cursos" className="cursos">
      <Container className="cursos-container">
        <FilterOptions props={BootcampsFilters} />
        <FilterItems props={BootcampsItems} />
      </Container>
    </section>
  );
}

export default BootcampsItem;
