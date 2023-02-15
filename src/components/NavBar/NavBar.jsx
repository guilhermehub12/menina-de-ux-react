import { Carousel } from "bootstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <a href="#">
            <img
              src="src/assets/img/header-logo.webp"
              alt=""
              className="img-fluid"
            />
          </a>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto" href="#">
                Início
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Estude
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Cursos
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Bootcamps
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Sobre
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Contato
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
