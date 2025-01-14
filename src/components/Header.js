import React from "react";
import "../styles/Header.css";

const Header = () => {
  const elevateLogo = require(`../assets/images/elevateLogo.png`)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="header">
      {/* Use the correct image path */}
      <img 
        src={elevateLogo}
        alt="Elevate Academy Logo" 
        className="logo" 
      />
      <nav>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button onClick={() => scrollToSection("about")}>About</button></li>
          <li><button onClick={() => scrollToSection("courses")}>Courses</button></li>
          <li><button onClick={() => scrollToSection("contact-section")}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
