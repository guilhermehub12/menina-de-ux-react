import React from "react";
import { BootcampsFilters } from "../../utils/BootcampsFilters";
import { BootcampsItems } from "../../utils/BootcampsItems";
import FilterItems from "../../components/Filters/FilterItems";
import FilterOptions from "../../components/Filters/FilterOptions";

function BootcampsItem() {
  return (
    <section id="cursos" className="cursos">
      <div className="cursos-container container">
        <FilterOptions props={BootcampsFilters} />
        <FilterItems props={BootcampsItems} />
      </div>
    </section>
  );
}

export default BootcampsItem;
