import React, { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import 'font-awesome/css/font-awesome.min.css';
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import Contact from "./components/Contact";

function App() {
  // Create a ref for the RegistrationForm section
  const registrationRef = useRef(null);

  return (
    <div className="App">
      <Header />
      {/* <Hero registrationRef={registrationRef} />
      <Courses />
      <About />
      <div ref={registrationRef}>
        <RegistrationForm />
      </div>
      <Contact/>
      <Footer /> */}
    </div>
  );
}

export default App;
