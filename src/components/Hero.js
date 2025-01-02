import React from "react";
import "../styles/Hero.css";

const Hero = ({ registrationRef }) => {
  // Function to handle scroll
  const scrollToRegistration = () => {
    // Scroll to the registration form smoothly
    registrationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src="/videos/elevateHeroFinal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Elevate</h1>
        <p>your creative</p>
        <h1>career</h1>
        <p>with us!</p>
        {/* Button to scroll to the registration form */}
      </div>
      <button onClick={scrollToRegistration} className="cta-button">
      Enroll Now!
        </button>
    </section>
  );
};

export default Hero;
