import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the mobile menu
  const elevateLogo = require(`../assets/images/elevateLogo.png`);

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle menu state

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="header">
      <img
        src={elevateLogo}
        alt="Elevate Academy Logo"
        className="logo"
      />
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Unicode character for the hamburger icon */}
      </div>
      {/* Navigation Links */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection("about")}>About</button></li>
          <li><button onClick={() => scrollToSection("courses")}>Courses</button></li>
          <li><button onClick={() => scrollToSection("contact-section")}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
