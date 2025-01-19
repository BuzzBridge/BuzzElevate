import React from "react";
import "../../styles/Modal.css";

const CourseDescriptionModal = ({ showModal, course, onClose }) => {
  if (!showModal) return null;
  const courseDescriptionImage = require(`../../assets/images/` + course.modalImage)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={courseDescriptionImage} alt={course.title} className="course-image" />
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default CourseDescriptionModal;
