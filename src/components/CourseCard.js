import React from "react";
import "../styles/CourseCard.css";

const CourseCard = ({ course, openModal }) => {
  return (
    <div className="course-card-wrapper">
      <div
        className="course-card"
        key={course.id}
        style={{
          backgroundImage: `url(${course.backgroundImage})`,
        }}
      >
        <div className="course-content">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      </div>
      <button
        onClick={() => openModal(course)}
        className="explore-button"
        style={{ backgroundColor: course.buttonColor }}
      >
        <b>Explore</b>
      </button>
    </div>
  );
};

export default CourseCard;
