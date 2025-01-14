import React from "react";

const courseCatalogue = () => {
    return (
        <div className="course-catalog">
            <h1 className="catalog-title">Courses</h1>
            <div
                className={`catalog-items ${
                courses.length > 3 ? "scrollable" : courses.length === 1 ? "centered" : ""
                }`}
            >
                {courses.map((course, index) => (
                <div className="course-card" key={index}>
                    <img src={course.image} alt={course.title} className="course-image" />
                    <h2 className="course-title">{course.title}</h2>
                </div>
                ))}
            </div>
        </div>
    );
}

export default courseCatalogue;