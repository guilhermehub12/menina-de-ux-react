import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../pages/Inicio/Hero.jsx";
import Sobre from "../pages/Inicio/Sobre.jsx";
import Cursos from "../pages/Inicio/Cursos.jsx";
import Telegram from "../components/Telegram/Telegram.jsx";
import Contato from "../components/Contato/Contato.jsx";
import ArrowToTop from "../components/ArrowToTop/ArrowToTop.jsx";

function Inicio() {
  return (
    <>
      <Header />
        <Hero />
      <main id="main">
        <Sobre />
        <Cursos />
        <Telegram />
        <Contato />
        <ArrowToTop />
      </main>

      <Footer />
    </>
  );
}

export default Inicio;
