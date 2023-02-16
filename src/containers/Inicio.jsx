import Header from  "../components/Header/Header.jsx"
import Footer from  "../components/Footer/Footer.jsx"
import Hero from  "../pages/Inicio/Hero.jsx"
import Sobre from  "../pages/Inicio/Sobre.jsx"
import Cursos from "../pages/Inicio/Cursos.jsx"
import Telegram from "../pages/Inicio/Telegram.jsx"
import Contato from "../pages/Inicio/Contato.jsx"
import ArrowToTop from "../components/ArrowToTop/ArrowToTop.jsx"
import Libras from "../components/Libras.jsx"

function Inicio() {
  return (
    <>
    <Header />

    <Hero />
    <Sobre />
    <Cursos />
    <Telegram />
    <Contato />
    <ArrowToTop />
    <Libras />


    <Footer />
    </>
  )
}

export default Inicio