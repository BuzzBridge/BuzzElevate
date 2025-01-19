import React from "react";

const CourseCardScrollable = ({ course, index, modalMethod }) => {
    const image = require(`../assets/images/${course.imagePath}`);
    return (
        <div key={index} className="course-card-new">
            <img src={image} alt={course.name} className="course-image-new" />
            <h3 className="course-name-new">{course.name}</h3>
            <button
                onClick={() => modalMethod(course)} // Pass the course object to openModal
                className="explore-button-new"
                style={{ backgroundColor: course.buttonColor }}
            >
                <b>Explore</b>
            </button>
        </div>
    );
}

export default CourseCardScrollable;
