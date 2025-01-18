import React from "react";

const CourseCardNew = ({ course }) => {
  const courseImage = require(`../assets/images/` + course.image)
  return (
    // <div className="course-card" key={course.id}>
    //   <img src={courseImage} alt={course.name} className="course-image" />
    //   <button className="explore-button">Explore Now</button>
    // </div>
    <div>
      <div className="course-card" key={course.id}>
        <img src={courseImage} alt={course.name} className="course-image" />
      </div>
      <button className="explore-button">Explore Now</button>
    </div>
  );
};

export default CourseCardNew;
