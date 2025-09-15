import React from "react";

const projects = [
  {
    title: "News App",
    img: "./img1.png",
    description:
      "An application that fetches and displays the latest news articles with category filters and search functionality.",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Password Generator",
    img: "./img3.png",
    description:
      "A tool that generates strong and secure passwords with customizable length and character options.",
    link: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Text Editor",
    img: "./img4.png",
    description: "A simple text editor application with CRUD features.",
    link: "https://github.com/yourusername/task-manager",
  },
];

const Projects = ({ darkMode }) => (
  <section
    id="projects"
    style={{ minHeight: "60vh", padding: "2rem" }}
  >
    <h2
      style={{
        fontSize: "2.5rem",
        textAlign: "center",
        marginBottom: "2rem",
      }}
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
            background: darkMode ? "#1f1f1f" : "#fff",
            color: darkMode ? "white" : "black",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "1.5rem",
            textAlign: "center",
            width: "300px", // 🔑 Fixed width
            height: "380px", // 🔑 Fixed height for all cards
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // content distributed
            transition: "all 0.5s ease",
          }}
        >
          {/* Image wrapper */}
          <div style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src={project.img}
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "150px",
                objectFit: "contain", // keep aspect ratio
              }}
            />
          </div>

          {/* Title + Description */}
          <div>
            <h3 style={{ margin: "1rem 0" }}>{project.title}</h3>
            <p style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
              {project.description}
            </p>
          </div>

          {/* Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: darkMode ? "#4da6ff" : "#007bff",
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
