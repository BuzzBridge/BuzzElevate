import React, { useState } from "react";
import "../styles/CourseCatalogueScrollable.css"
import CourseCardScrollable from "./CourseCardScrollable";
import CourseDescriptionModal from "./CourseModal/CourseDescriptionModal";

const CourseCatalogueScrollable = () => {

    const courseBackground = require(`../assets/images/backgroundImage2.jpg`);
    const courses = [
        {
            "name": "Film Making",
            "imagePath": "filmMakingIntro.png",
            "modalImage": "videoEditingDescription.png"
        },
        {
            "name": "Graphic Design",
            "imagePath": "graphicDesignIntro.png",
            "modalImage": "graphicDesignDescription.png"
        },
        {
            "name": "Music Production",
            "imagePath": "musicProductionIntro.png",
            "modalImage": "musicProductionDescription.png"
        },
    ]

    const [visibleCourses, setVisibleCourses] = useState([...courses]);

    // Function to append more courses for infinite scroll
    const fetchMoreCourses = () => {
        setVisibleCourses((prevCourses) => [...prevCourses, ...courses]);
    };

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
        <section
            className="courses"
            id="courses"
            style={{
                backgroundImage: `url(${courseBackground})`
            }}
        >
            <h2>Our Courses</h2>
            <div
                className="course-scroll-container-new"
                onScroll={(e) => {
                    const { scrollLeft, scrollWidth, clientWidth } = e.target;
                    if (scrollLeft + clientWidth >= scrollWidth - 5) {
                        fetchMoreCourses(); // Append courses when scrolling reaches the end
                    }
                }}
            >
                <div className="course-row-new">
                    {visibleCourses.map((course, index) => (
                        <CourseCardScrollable key={index} course={course} index={index} modalMethod={openModal} />
                    ))}
                </div>
            </div>

            {showModal && renderModal()}
        </section>
    );
};

export default CourseCatalogueScrollable;





// const CoursesNotToUse = () => {
//     const courseBackground = require(`../assets/images/backgroundImage2.jpg`);
//     const courses = [
//         {
//             "name": "Film Making",
//             "imagePath": "filmMakingIntro.png"
//         },
//         {
//             "name": "Graphic Design",
//             "imagePath": "graphicDesignIntro.png"
//         },
//         {
//             "name": "Music Production",
//             "imagePath": "musicProductionIntro.png"
//         },
//     ]

//     const [visibleCourses, setVisibleCourses] = useState([...courses]);

//     // Function to append more courses for infinite scroll
//     const fetchMoreCourses = () => {
//         setVisibleCourses((prevCourses) => [...prevCourses, ...courses]);
//     };

// const openModal = (course) => {
//     setSelectedCourse(course); // Set the selected course
//     setShowModal(true); // Show the modal
// };

// const closeModal = () => {
//     setShowModal(false); // Close the modal
// };

// const renderModal = () => {
//     if (selectedCourse) {
//         return (
//             <CourseDescriptionModal
//                 course={selectedCourse}
//                 showModal={showModal} // Make sure showModal is passed
//                 onClose={closeModal} // Ensure onClose handler is passed
//             />
//         );
//     }
//     return null; // Ensure there's no modal rendered if no course is selected
// };

//     return (
//         <section
//             className="courses"
//             id="courses"
//             style={{
//                 backgroundImage: `url(${courseBackground})`
//             }}
//         >
//             <h2>Our Courses</h2>
//             <div
//                 className="course-scroll-container-new"
//                 onScroll={(e) => {
//                     const { scrollLeft, scrollWidth, clientWidth } = e.target;
//                     if (scrollLeft + clientWidth >= scrollWidth - 5) {
//                         fetchMoreCourses(); // Append courses when scrolling reaches the end
//                     }
//                 }}
//             >
//                 <div className="course-row-new">
//                     {visibleCourses.map((course, index) => (
//                         <CourseCardScrollable key={index} course={course} index={index} modalMethod={openModal} />
//                     ))}
//                 </div>
//             </div>

//             {/* Dynamically render the modal for the selected course */}
//             {showModal && renderModal()}
//             {/* Ensure modal only renders when showModal is true */}
//         </section>
//     );
// };
