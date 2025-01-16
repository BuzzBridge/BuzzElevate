import React from "react";
import "../styles/Hero.css";

const Hero = ({ registrationRef }) => {
  const loopVideo = require(`../assets/videos/elevateMainLoop2.mp4`)
  const tagLine = require(`../assets/images/elevateTagline.png`)
  
  // Function to handle scroll
  const scrollToRegistration = () => {
    // Scroll to the registration form smoothly
    registrationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src={loopVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        {/* Replace text with an image */}
        <img 
          src={tagLine}
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
