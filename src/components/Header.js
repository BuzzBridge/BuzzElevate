import React from "react";
import "../styles/Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="header">
      <div className="logo">Elevate Academy</div>
      <nav>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button onClick={() => scrollToSection("about")}>About</button></li>
          <li><button onClick={() => scrollToSection("courses")}>Courses</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
