import React from "react";

const projects = [
  {
    title: "News App",
    img:"./img1.png",
    description:
      "A personal portfolio website built with React to showcase my skills and projects.",
    link: "https://github.com/yourusername/portfolio",
    },
  {
    title: "Weather App",
        img:"./img1.png",
    description:
      "A weather forecasting app using OpenWeatherMap API and React.",
    link: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Text Editor",
        img:"./img1.png",
    description: "A simple text editor application with CRUD features.",
    link: "https://github.com/yourusername/task-manager",
  },
];

const Projects = () => (
  <section
    id="projects"
    style={{
      minHeight: "60vh",

      padding: "2rem",
    }}
  >
    <h2
      style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "2rem" }}
    >
      Projects
    </h2>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {projects.map((project, idx) => (
        <div
          key={idx}
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <img src={project.img} alt="" className="w-100 h-60"/>
          <h3 style={{ marginBottom: "1rem" }}>{project.title}</h3>
          <p style={{ marginBottom: "1rem" }}>{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            View Code
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
