import AOS from 'aos';
import 'aos/dist/aos.css';

export const Aos = () => {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 1000,
    throttleDelay: 1000,
    offset: 120,
    delay: 0,
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
}
  