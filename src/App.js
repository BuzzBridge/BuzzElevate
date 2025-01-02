import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import 'font-awesome/css/font-awesome.min.css';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
