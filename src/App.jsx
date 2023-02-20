import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Inicio from "./routes/Inicio";
import Estude from "./routes/Estude";
import Cursos from "./routes/Cursos";
import Bootcamps from "./routes/Bootcamps";
import Sobre from "./routes/Sobre";
import Contatos from "./routes/Contatos";
import { Aos } from "./utils/Aos";
import NotFound from "./pages/NotFound/NotFound";
import Libras from "./utils/Libras";

function App() {
  return (
    <>
      <Aos />
      <Libras />
      {
        <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/estude" element={<Estude />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/bootcamps" element={<Bootcamps />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
