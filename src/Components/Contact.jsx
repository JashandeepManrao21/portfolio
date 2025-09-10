import React from "react";

const Contact = () => (
  <section
    id="contact"
    style={{
      minHeight: "40vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      padding: "2rem",
    }}
  >
    <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Me</h2>
    <p
      style={{
        fontSize: "1.1rem",
        marginBottom: "1.5rem",
        textAlign: "center",
      }}
    >
      Interested in working together or have any questions? Feel free to reach
      out!
    </p>
    <a
      href="mailto:jashandeepmanrao@email.com"
      style={{
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.1rem",
      }}
    >
      jashandeepmanrao@email.com
    </a>
  </section>
);

export default Contact;
