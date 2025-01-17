import React, { useState } from "react";
import "../styles/RegistrationForm.css";

const RegistrationForm = () => {
  const backgroundImage = require(`../assets/images/backgroundImage2.jpg`);
  const [popupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setPopupVisible(true);

  
    const scriptURL = "https://script.google.com/macros/s/AKfycbyCV2slGuP6m-9sbudz4iTrZq66BEf80WABV7O9QS6Z1uPeY0ICJw_8BMMrXlm38eU4bg/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }

  
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
    });

    setTimeout(() => {
      setPopupVisible(false);
    }, 3000); 
  };

  return (
    <div
      className="registration-form-wrapper"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="registration-heading">
        <h2>Begin Your Elevation</h2>
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <select
          className="course-dropdown"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
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

      {popupVisible && (
        <div className="popup">
          <p>Response Submitted</p>
          <p>We'll be in contact with you soon!</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
