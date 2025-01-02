import React from "react";
import "../styles/Courses.css";

const Courses = () => {
  const courses = [
    { id: 1, title: "Music Production", description: "Dive into the world of sound with our comprehensive Music Production course. Learn to create, mix, and master tracks like a pro." },
    { id: 2, title: "Graphic Designing", description: "Transform ideas into stunning visuals with our Graphic Designing course. Perfect for creatives at all levels." },
    { id: 3, title: "Digital Marketing", description: "Step into the fast-paced world of digital marketing with our expert-led course. Gain the skills to grow brands and drive engagement in the digital age." },
  ];

  return (
    <section className="courses" id="courses">
      <h2>Our Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
