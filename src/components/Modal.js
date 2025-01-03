import React from "react";
import "../styles/Modal.css"; // You can style it as per your needs

const Modal = ({ showModal, course, onClose }) => {
  if (!showModal) return null; // Don't render the modal if it's not visible

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        {/* Display the unique course image */}
        <img src={course.image} alt={course.title} className="course-image" />
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
