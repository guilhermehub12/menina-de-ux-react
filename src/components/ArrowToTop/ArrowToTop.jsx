import { React, useState, useEffect } from "react";
import { ArrowUp } from "react-bootstrap-icons";
import "./ArrowToTop.css";

function ArrowToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
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

  return (
    <a
      onClick={handleClick}
      className={`back-to-top ${
        showButton ? "active" : ""
      } d-flex align-items-center justify-content-center`}
    >
      <ArrowUp color={"#FFF"} />
    </a>
  );
}

export default ArrowToTop;
