import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "react-bootstrap-icons";
import "./ArrowToTop.css";

function ArrowToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleBackToTop = () => {
      setShowButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", toggleBackToTop);

    return () => {
      window.removeEventListener("scroll", toggleBackToTop);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showButton ? (
    <Link
      onClick={handleClick}
      aria-label="arrow-to-top"
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <ArrowUp color={"#FFF"} />
    </Link>
  ) : null;
}

export default ArrowToTop;