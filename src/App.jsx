import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Stars create karne ka function
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 80; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 3 + 1; // size 1–4px
      const delay = Math.random() * 5;

      stars.push(
        <div
          key={i}
          className="star"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-[2000ms] ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Dark mode me stars background */}
      {darkMode && <div className="stars">{renderStars()}</div>}

      <Navbar onclick={toggleMode} mode={darkMode} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
