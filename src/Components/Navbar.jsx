import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  // State to track if the navbar is scrolled
  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  // Add event listeners after the component mounts
  function addEvents() {
    const navLinks = document.querySelectorAll(".nav-link");
    const togglerContainer = document.querySelector("#navbarSupportedContent");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        togglerContainer.classList.remove("show");
      });
    });
  }
  useEffect(() => {
    addEvents();
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${!isScroll && "py-4"}`}
        data-bs-theme="dark"
      >
        <div className="container">
          <Link className="navbar-brand text-uppercase text-white" to={""}>
            <h1 className="fs-2 fw-bold">Start Framework</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0 text-uppercase fw-bold text-center">
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-2"
                  aria-current="page"
                  to={"about"}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2" to={"portfolio"}>
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2" to={"contact"}>
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
