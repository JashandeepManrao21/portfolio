import React, { useState, useEffect } from 'react';

const Navbar = ({ onclick,mode }) => (
  <nav className={`flex justify-between items-center px-8 py-4 `}>
    <div className="font-bold text-2xl">My Portfolio</div>
    <ul className="flex gap-8 list-none m-0 p-0">
      <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
      <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
      <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
      <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
    </ul>
    <button
      onClick={onclick}
      className={`ml-6 px-4 py-2 rounded-full font-semibold transition  cursor-pointer`}
      aria-label="Toggle dark mode"
    >
      {mode ? ' ☀️ ' : '🌙 '}
    </button>
  </nav>
);

export default Navbar;