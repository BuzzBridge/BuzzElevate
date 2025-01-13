import React from "react";
import "../../styles/Modal.css";

const CourseDescriptionModal = ({ showModal, course, onClose }) => {
  if (!showModal) return null;
  const image = require(`../../assets/courseImages/${course.image}`);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        {/* Render the course image */}
        <img src={image} alt={course.title} className="course-image" />
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default CourseDescriptionModal;
