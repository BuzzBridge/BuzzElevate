import React, { useState } from "react";
import { courses } from "../data/courseData"; // Import course data
import CourseDescriptionModal from "./CourseModal/CourseDescriptionModal";
import CourseCard from "./CourseCard";  // Course Card component

import "../styles/Courses.css"; // Import courses CSS
import "../styles/Modal.css"; // Import modal-specific styles (if separate)

const Courses = () => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [selectedCourse, setSelectedCourse] = useState(null); // Store selected course data

  const openModal = (course) => {
    setSelectedCourse(course); // Set the selected course
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  const renderModal = () => {
    if (selectedCourse) {
        return (
          <CourseDescriptionModal
            course={selectedCourse}
            showModal={showModal} // Make sure showModal is passed
            onClose={closeModal} // Ensure onClose handler is passed
          />
        );
    }
    return null; // Ensure there's no modal rendered if no course is selected
  };

  return (
    // TODO: WRONG CODE. if more courses come in, all will try to fit within the same space.
    <section className="courses" id="courses">
      <h2>Our Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            openModal={openModal}  // Pass openModal function here
          />
        ))}
      </div>

      {/* Dynamically render the modal for the selected course */}
      {showModal && renderModal()} {/* Ensure modal only renders when showModal is true */}
    </section>
  );
};

export default Courses;
