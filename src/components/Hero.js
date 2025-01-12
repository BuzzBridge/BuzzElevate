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
        <source src="/assets/videos/elevateHeroFinal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        {/* Replace text with an image */}
        <img 
          src="/assets/images/ElevateHero.png" 
          alt="Elevate your creative career with us" 
          className="hero-image" 
        />
      </div>
      <button onClick={scrollToRegistration} className="cta-button">
       <b> Enroll Now! </b>
      </button>
    </section>
  );
};

export default Hero;
