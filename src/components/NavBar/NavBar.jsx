import { List, X } from "react-bootstrap-icons";
import { React, useState } from "react";
import "./NavBar.css";

function NavBar() {
  const pages = ["Início", "Estude", "Cursos", "Bootcamps", "Sobre", "Contato"];
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const navbarClass = `${isMobileNavOpen ? "navbar-mobile" : ""}`;

  const handleMobileDropdownClick = (e) =>
    {
      if(isMobileNavOpen) {
        e.preventDefault();
        e.currentTarget.nextElementSibling.classList.toggle("dropdown-active");
      }
    };

  return (
    <nav id="navbar" className={navbarClass}>
      <ul>
        {pages.map((page, index) => {
          return (
            <li key={`${page}-${index}`} className="nav-item">
              <a
                className="nav-link scrollto"
                href="#"
                onClick={handleMobileDropdownClick}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
        <List className="mobile-nav-toggle" onClick={handleMobileNavToggle} />
    </nav>
  );
}

export default NavBar;
