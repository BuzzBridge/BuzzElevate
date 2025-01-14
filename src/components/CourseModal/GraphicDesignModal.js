import React from "react";
import "../../styles/Modal.css";

const GraphicDesignModal = ({ showModal, course, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        {/* Render the course image */}
        <img src={course.image} alt={course.title} className="course-image" />
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default GraphicDesignModal;
