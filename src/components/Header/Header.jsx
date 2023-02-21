import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllImages from "../../utils/AllImages";
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
      <Container className="d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link to="/">
            <img
              src={AllImages.HeaderLogo}
              alt="Logo Menina de UX"
              className="img-fluid"
            />
          </Link>
        </div>

        <NavBar />
      </Container>
    </header>
  );
}

export default Header;
