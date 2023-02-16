import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Inicio from "./containers/Inicio";
import Estude from "./containers/Estude";
import Cursos from "./containers/Cursos";
import Bootcamps from "./containers/Bootcamps";
import Sobre from "./containers/Sobre";
import Contato from "./containers/Contato";
import "./App.css";

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/estude" element={<Estude />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/bootcamps" element={<Bootcamps />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
