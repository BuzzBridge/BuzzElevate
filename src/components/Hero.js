import React, { useState } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src="/videos/elevateHero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to Elevate Academy</h1>
        <p>Where creativity meets innovation!</p>
        <button className="cta-button" onClick={toggleForm}>
          {showForm ? "Close Form" : "Register Now"}
        </button>
        {showForm && (
          <form className="registration-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone Number" required />
            <select className="course-dropdown" required>
              <option value="" disabled selected>
                Select a Course
              </option>
              <option value="musicProduction">Music Production</option>
              <option value="graphicDesign">Graphic Design</option>
              <option value="digitalMarketing">Digital Marketing</option>
            </select>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Hero;
