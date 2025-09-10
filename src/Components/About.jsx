import React from 'react';

const About = () => (
  <section id="about" style={{
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    padding: '2rem'
  }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h2>
    <p style={{ fontSize: '1.15rem', maxWidth: '700px', textAlign: 'center' }}>
      I'm Jashandeep Manrao, a dedicated developer with a passion for building modern web applications.
      I enjoy learning new technologies and solving real-world problems through code. My skills include React, JavaScript, and more.
      Let's connect and create something amazing together!
    </p>
  </section>
);

export default About;