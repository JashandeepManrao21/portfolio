import React from 'react';

const Home = () => (
  <section
    id="home"
    className="min-h-screen flex flex-col justify-center items-center"
  >
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center
      dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-400">
      Welcome to My Portfolio
    </h1>
    <p className="text-lg md:text-xl max-w-xl text-center mb-8">
      Hi, I'm <span className="font-semibold text-blue-700 dark:text-purple-400">Jashandeep Manrao</span>, a passionate developer. Explore my work, skills, and projects below!
    </p>
    <a
      href="#projects"
      className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-purple-600 transition duration-300 font-semibold
        dark:bg-purple-700 dark:hover:bg-blue-600"
    >
      View Projects
    </a>
  </section>
);

export default Home;