import "../../src/index.css";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <button
        onClick={() => setMenuOpen(false)}
        className="mobile-menu-close-btn"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="mobile-menu-link"
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="mobile-menu-link"
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="mobile-menu-link"
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="mobile-menu-link"
      >
        Contact
      </a>
    </div>
  );
};
