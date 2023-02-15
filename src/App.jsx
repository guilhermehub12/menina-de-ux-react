import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArrowUp } from "react-bootstrap-icons";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <div className="App">
      {/* <BrowserRouter>
            <Routes>
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/estude' element={<Estude />} />
                <Route path='/cursos' element={<Cursos />} />
                <Route path='/bootcamps' element={<Bootcamps />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/contato' element={<Contato />} />
            </Routes>
        </BrowserRouter> */}

        <NavBar />
        <Footer />

      <a
        href="#"
        id=""
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <ArrowUp color={'#FFF'} />
      </a>
    </div>
  );
}

export default App;
