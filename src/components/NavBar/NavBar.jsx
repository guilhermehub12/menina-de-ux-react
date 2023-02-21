import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "react-bootstrap-icons";
import "./NavBar.css";
import { Navbar } from "react-bootstrap";

function NavBar() {
  const pages = [
    {
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
      href: "/contatos",
    },
  ];
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isListIconActive, setIsListIconActive] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsMobileNavOpen(false);
    setIsListIconActive(true);
    window.scrollTo(0, 0);
  }, [location]);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setIsListIconActive(!isListIconActive);
  };

  const navbarClass = `navbar ${isMobileNavOpen ? "navbar-mobile" : ""}`;

  const handleMobileDropdownClick = (e) => {
    if (isMobileNavOpen) {
      e.preventDefault();
      e.currentTarget.nextElementSibling.classList.toggle("dropdown-active");
    }
  };

  return (
    <Navbar id="navbar" className={navbarClass}>
      <ul>
        {pages.map((page, index) => {
          const isAtCurrentPage = location.pathname === page.href;
          return (
            <li key={`${page}-${index}`}>
              <Link
                className={`nav-link ${
                  isAtCurrentPage ? "scrollto active" : ""
                }`}
                to={page.href}
                onClick={handleMobileDropdownClick}
              >
                {page.page}
              </Link>
            </li>
          );
        })}
      </ul>
      {isListIconActive ? (
        <List className="mobile-nav-toggle" onClick={handleMobileNavToggle} />
      ) : (
        <X className="mobile-nav-toggle" onClick={handleMobileNavToggle} />
      )}
    </Navbar>
  );
}

export default NavBar;
