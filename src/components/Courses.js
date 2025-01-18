import React, { useState } from "react";
import { courses } from "../data/courseData"; // Import course data
import CourseDescriptionModal from "./CourseModal/CourseDescriptionModal";
import CourseCardNew from "./CourseCardNew";  // Course Card component

import "../styles/Courses.css"; // Import courses CSS


const Courses = () => {
  const courseContent = [
    {
      "id": 1,
      "name": "Course 1",
      "image": "filmMakingIntro1.png"
    },
    {
      "id": 2,
      "name": "Course 2",
      "image": "graphicDesignIntro1.png"
    },
    {
      "id": 3,
      "name": "Course 3",
      "image": "musicProductionIntro1.png"
    },
    {
      "id": 4,
      "name": "Course 4",
      "image": "graphicDesignIntro1.png"
    }
  ];
  // const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  // const [selectedCourse, setSelectedCourse] = useState(null); // Store selected course data
  const isSmallScreen = window.innerWidth <= 768;
  const courseBackground = require(`../assets/images/backgroundImage2.jpg`);
  const visibleCount = isSmallScreen ? 1 : 3;
  const [startIndex, setStartIndex] = useState(0);
  const handleScroll = (direction) => {
    if (direction === "left") {
      setStartIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
    } else if (direction === "right") {
      setStartIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }
  };

  const getVisibleCourses = () => {
    const visibleCourses = [];
    for (let i = 0; i < visibleCount; i++) {
      visibleCourses.push(courseContent[(startIndex + i) % courses.length]);
    }
    return visibleCourses;
  };

  // const openModal = (course) => {
  //   setSelectedCourse(course); // Set the selected course
  //   setShowModal(true); // Show the modal
  // };

  // const closeModal = () => {
  //   setShowModal(false); // Close the modal
  // };

  // const renderModal = () => {
  //   if (selectedCourse) {
  //       return (
  //         <CourseDescriptionModal
  //           course={selectedCourse}
  //           showModal={showModal} // Make sure showModal is passed
  //           onClose={closeModal} // Ensure onClose handler is passed
  //         />
  //       );
  //   }
  //   return null; // Ensure there's no modal rendered if no course is selected
  // };

  return (
    <section
      className="courses"
      id="courses"
      style={{
        backgroundImage: `url(${courseBackground})`
      }}
    >
      <h2>Our Courses</h2>
      <div className="catalogue-wrapper">

        {/* {!isSmallScreen && (
          <button className="carousel-button left" onClick={() => handleScroll("left")}>
            <span class="arrow">&larr;</span>
          </button>
        )} */}

        <button className="carousel-button left" onClick={() => handleScroll("left")}>
          <span class="arrow">&larr;</span>
        </button>

        <div
          // className={`catalogue-container ${courseContent.length > 3 ? "scrollable" : ""}`}
          className={`catalogue-container`}
        >
          {
            getVisibleCourses().map((course) => (
              <CourseCardNew key={course.id} course={course} />
            ))}
        </div>

        {/* {!isSmallScreen && (
          <button className="carousel-button right" onClick={() => handleScroll("right")}>
            <span class="arrow">&rarr;</span>
          </button>
        )} */}
        <button className="carousel-button right" onClick={() => handleScroll("right")}>
          <span class="arrow">&rarr;</span>
        </button>
      </div>
      {/* <div className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            openModal={openModal}  // Pass openModal function here
          />
        ))}
      </div> */}

      {/* Dynamically render the modal for the selected course */}
      {/* {showModal && renderModal()}  */}
      {/* Ensure modal only renders when showModal is true */}
    </section>
  );
};

export default Courses;
