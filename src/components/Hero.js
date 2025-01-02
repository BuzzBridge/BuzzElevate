import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src="/videos/elevateHeroFinal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to Elevate Academy</h1>
        <p>Where creativity meets innovation!</p>
      </div>
    </section>
  );
};

export default Hero;
