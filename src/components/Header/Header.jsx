import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";
import "./Header.css";

function Header() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const headerHeight = 80;

  const handleScroll = () => {
    if (window.scrollY > headerHeight) {
      setHeaderScrolled(true);
    } else {
      setHeaderScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`header ${
        headerScrolled ? "header-scrolled" : ""
      } fixed-top d-flex align-items-center header-transparent`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link to="inicio">
            <img
              src="../src/assets/img/header-logo.webp"
              alt="Logo Menina de UX"
              className="img-fluid"
            />
          </Link>
        </div>

        <NavBar />
      </div>
    </header>
  );
}

export default Header;
