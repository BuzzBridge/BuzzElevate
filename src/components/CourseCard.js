import React from "react";
import "../styles/CourseCard.css";

const CourseCard = ({ course, openModal }) => {
  const backgroundImage = require(`../assets/courseImages/${course.backgroundImage}`);

  return (
    <div className="course-card-wrapper">
      <div
        className="course-card"
        key={course.id}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="course-content">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      </div>
      <button
        onClick={() => openModal(course)} // Pass the course object to openModal
        className="explore-button"
        style={{ backgroundColor: course.buttonColor }}
      >
        <b>Explore</b>
      </button>
    </div>
  );
};

export default CourseCard;
