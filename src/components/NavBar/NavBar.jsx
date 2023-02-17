import { List, X } from "react-bootstrap-icons";
import { React, useState } from "react";
import "./NavBar.css";

function NavBar() {
  const pages = [{
    page: "Início",
    href: "/",
  },
  {
    page: "Estude",
    href: "/estude",
  },
  {
    page: "Cursos",
    href: "/cursos",
  },
  {
    page: "Bootcamps",
    href: "/bootcamps",
  },
  {
    page: "Sobre",
    href: "/sobre",
  },
  {
    page: "Contato",
    href: "/contato",
  }];
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isListIconActive, setIsListIconActive] = useState(true);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setIsListIconActive(!isListIconActive);
  };


  const navbarClass = `navbar ${isMobileNavOpen ? "navbar-mobile" : ""}`;

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
          const isAtCurrentPage = window.location.pathname === page.href;
          return (
            <li key={`${page}-${index}`}>
              <a
                className={`nav-link ${isAtCurrentPage ? "scrollto active" : ""}`}
                href={page.href}
                onClick={handleMobileDropdownClick}
              >
                {page.page}
              </a>
            </li>
          );
        })}
      </ul>
      {
        isListIconActive ? (
        <List className="mobile-nav-toggle" onClick={handleMobileNavToggle} />
        ) : (
          <X className="mobile-nav-toggle" onClick={handleMobileNavToggle} />
        )
      }
    </nav>
  );
}

export default NavBar;
