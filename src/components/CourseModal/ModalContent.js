// src/components/CourseModal/ModalContent.js
import React from "react";

const ModalContent = ({ course }) => {
  return (
    <>
      <p>{course.description}</p>
      <h4>Course Details</h4>
      <p><strong>Duration:</strong> 12 weeks</p>
      <p><strong>Level:</strong> Beginner to Advanced</p>
      <p><strong>Instructor:</strong> John Doe</p>

      <h4>Course Topics</h4>
      <ul>
        <li>Introduction to Digital Audio Workstations (DAWs)</li>
        <li>Basic Music Theory</li>
        <li>Mixing Techniques</li>
        <li>Advanced Mastering</li>
      </ul>

      <h4>What's Included?</h4>
      <p>Access to exclusive learning materials, video lessons, and assignments. You'll also have weekly live sessions with the instructor.</p>

      <h4>Course Preview</h4>
      <img
        src={course.previewImage}
        alt={`${course.title} Preview`}
        className="course-preview-image"
      />
    </>
  );
};

export default ModalContent;
