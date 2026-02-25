import React, { useState, useEffect } from "react";

// Parent Wrapper for isolation
export default function Portfolio() {
  return (
    <div className="portfolio-app font-sans">
      <App />
    </div>
  );
}

// Main App
function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: auto system theme detection
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen flex flex-col">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

// Premium Navbar
function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-gray-800 dark:to-gray-900 p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <h1 className="text-white font-extrabold text-2xl tracking-tight">Deepak Dawar</h1>
      <ul className="flex gap-6 text-white font-medium">
        <li className="hover:text-yellow-400 cursor-pointer transition-colors">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer transition-colors">About</li>
        <li className="hover:text-yellow-400 cursor-pointer transition-colors">Projects</li>
        <li className="hover:text-yellow-400 cursor-pointer transition-colors">Contact</li>
      </ul>
      {/* Dark/Light toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow hover:scale-110 transition-transform"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

// Hero Section
function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-300">
        Hello, I'm Deepak
      </h2>
      <p className="text-lg md:text-xl max-w-3xl text-gray-700 dark:text-gray-300 mb-8">
        I am a BSc Computer Science student and aspiring developer building modern web applications
        with React, Tailwind CSS, and modern frontend best practices.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-semibold rounded-lg shadow-lg transition-colors"
      >
        See My Work
      </a>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white p-6 text-center mt-auto">
      <p>© 2026 Deepak Dawar. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4 text-xl">
        <a href="#" className="hover:text-yellow-400 transition-colors">🐦</a>
        <a href="#" className="hover:text-yellow-400 transition-colors">💼</a>
        <a href="#" className="hover:text-yellow-400 transition-colors">📧</a>
      </div>
    </footer>
  );
}