import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  const aboutSectionBackground = require(`../assets/images/aboutSectionBackground.jpg`)
  return (
    <section className="contact-section" id="contact-section" style={{
      backgroundImage: `url(${aboutSectionBackground})`,
    }}>
      <h2 className="contact-title">Let’s Connect</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <p>
            <strong>Address:</strong> Sector 4, Channi Himmat, Jammu, Jammu & Kashmir
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+919086129669">9086129669 | 9086377587 | 9682364966</a>
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:admin@elevatecreativesolutions.com">admin@elevatecreativesolutions.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
