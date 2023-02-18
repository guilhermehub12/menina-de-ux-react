import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./routes/Inicio";
import Estude from "./routes/Estude";
import Cursos from "./routes/Cursos";
import Bootcamps from "./routes/Bootcamps";
import Sobre from "./routes/Sobre";
import Contato from "./routes/Contato";
import "./styles/global.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 1000, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 1000, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  return (
    <>
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
    </>
  );
}

export default App;
