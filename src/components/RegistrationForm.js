import React from "react";
import "../styles/RegistrationForm.css";

const RegistrationForm = () => {
  return (
    <div className="registration-form-wrapper">
      <div className="registration-heading">
        <h2>Begin Your Elevation</h2>
      </div>
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
    </div>
  );
};

export default RegistrationForm;
