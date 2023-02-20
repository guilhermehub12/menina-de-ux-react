import React from "react";
import { CursosFilters } from "../../utils/CursosFilters";
import { CursosItems } from "../../utils/CursosItems";
import FilterItems from "../../components/Filters/FilterItems";
import FilterOptions from "../../components/Filters/FilterOptions";
import "./CursosItem.css";

function CursosItem() {
  return (
    <section id="cursos" className="cursos">
      <div className="cursos-container container">
        <FilterOptions props={CursosFilters} />
        <FilterItems props={CursosItems} />
      </div>
    </section>
  );
}

export default CursosItem;
