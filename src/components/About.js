import React from "react";
import "../styles/About.css";

const About = () => {
  const aboutImage = require(`../assets/images/backgroundImage1.jpg`)
  // TODO: Move context to json
  return (
    <section
      className="about"
      id="about"
      style={{
        backgroundImage: `url(${aboutImage})`
      }}
    >
      <h2>About Us</h2>
      <p>
        Welcome to Elevate Academy, Jammu’s first-of-its-kind creative learning hub dedicated to nurturing talent and transforming dreams into reality. 
        We are more than just an academy; we are a community where passion meets purpose, and creativity knows no bounds.
      </p>
      <p>
        At Elevate Academy, we believe that every individual has the potential to achieve greatness with the right guidance and resources. 
        That’s why we’ve brought together a team of seasoned professionals, each with over 5 years of industry experience in Music, Graphic Design, and Video Editing. 
        Our faculty is not just skilled but deeply passionate about sharing their knowledge, ensuring that every student receives personalized mentorship and real-world insights.
      </p>
      <p>
        Our mission is simple yet profound: to empower our students and clients to achieve professional success in their creative journeys. 
        Whether you’re a budding artist, an aspiring designer, or a storyteller looking to master the art of video editing, Elevate Academy is here to guide you every step of the way.
      </p>
      <p>
        We’re proud to call Jammu our home and even prouder to be pioneers in offering such comprehensive creative education in the region. 
        Our state-of-the-art facilities, hands-on training approach, and industry-relevant curriculum are designed to prepare you for the challenges and opportunities of the professional world.
      </p>
      <p>
        But Elevate Academy is more than just skill-building. It’s about inspiring confidence, sparking creativity, and building a community of like-minded individuals who dare to dream big and work hard to make those dreams come true.
      </p>
      <p>
        Join us at Elevate Academy, and let’s embark on a journey to unlock your true potential and shape a future filled with endless possibilities. 
        Together, we don’t just learn; we elevate.
      </p>
    </section>
  );
};

export default About;
