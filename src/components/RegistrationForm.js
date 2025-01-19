import React from "react";
import "../styles/RegistrationForm.css"; 

const RegistrationForm = () => {
  const jotformUrl = "https://form.jotform.com/250181201079447"; 

  const handleRedirect = () => {
    window.location.href = jotformUrl;
  };

  return (
    <div className="registration-form-wrapper">
      <button
        className="registration-button"
        onClick={handleRedirect}
      >
        Register Now
      </button>
    </div>
  );
};

export default RegistrationForm;
