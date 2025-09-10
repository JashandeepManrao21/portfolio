import React, { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  let toggleMode = () => {
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

  return (
    <div
      className="h-full w-full"
      style={
        darkMode
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <Navbar onclick={toggleMode} mode={darkMode} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
