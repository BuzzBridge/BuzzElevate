// src/components/CourseModal/MusicProductionModal.js
import React from "react";
import ModalContent from "./ModalContent";  // Common content component

const DigitalMarketingModal = ({ course, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{course.title}</h3>
        <ModalContent course={course} />
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default DigitalMarketingModal;
