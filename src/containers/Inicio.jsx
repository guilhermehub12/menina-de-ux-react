import Header from  "../components/Header/Header.jsx"
import Footer from  "../components/Footer/Footer.jsx"
import Hero from  "../components/Inicio/Hero.jsx"
import Sobre from  "../components/Inicio/Sobre.jsx"
import Cursos from "../components/Inicio/Cursos.jsx"
import Telegram from "../components/Inicio/Telegram.jsx"
import Contato from "../components/Inicio/Contato.jsx"

function Inicio() {
  return (
    <>
    <Header />

    <Hero />
    <Sobre />
    <Cursos />
    <Telegram />
    <Contato />


    <Footer />
    </>
  )
}

export default Inicio