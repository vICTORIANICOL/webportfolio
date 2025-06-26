import { useEffect } from "react";
import "../../src/index.css"; // Ensure styles are imported


export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <a href="#home" className="logo">
            Victoria<span className="logo-subtext">.tech</span>
          </a>

          <div
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="desktop-nav-links">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
