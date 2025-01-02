import React from "react";
import "../styles/CourseCard.css"; // Import the updated CSS
import { courses } from "../data/Courses"; // Import course data

const CourseCard = ({ course, openModal }) => {
  return (
    <div
      className="course-card"
      key={course.id}
      style={{
        backgroundImage: `url(${course.backgroundImage})`, // Use the correct image path
      }}
    >
      <div className="course-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
      <button onClick={() => openModal(course)} className="arrow-button">
          <i className="fa fa-arrow-right"></i> {/* Font Awesome arrow icon */}
        </button>
    </div>
  );
};

export default CourseCard;
