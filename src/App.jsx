import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUp } from "react-bootstrap-icons";
import Inicio from "./containers/Inicio";
import "./App.css";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", toggleBackToTop);

    return () => {
      window.removeEventListener("scroll", toggleBackToTop);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            {/* <Route path="/estude" element={<Estude />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/bootcamps" element={<Bootcamps />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} /> */}
          </Routes>
        </BrowserRouter>
      }

      <a
        onClick={handleClick}
        className={`back-to-top ${showButton ? 'active' : ''} d-flex align-items-center justify-content-center`}
      >
        <ArrowUp color={"#FFF"} />
      </a>
    </div>
  );
}

export default App;
