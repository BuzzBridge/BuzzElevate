import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa"; // Import Instagram icon
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>© 2025 Elevate Academy. All rights reserved.</p>
        <p className="managed-by">Powered By Buzz Bridge Inc.</p>
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} /> {/* Increased icon size */}
          <FaYoutube size={40} /> {/* Increased icon size */}
          <FaFacebook size={40} /> {/* Increased icon size */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
