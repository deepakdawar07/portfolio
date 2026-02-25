import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return (
    // ══ PARENT CLASS — controls ALL theming ══
    <div className={`pf${dark ? "" : " pf--light"}`}>
      <BrowserRouter>
        <Navbar dark={dark} setDark={setDark} />
        <main className="pf__main">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume"   element={<Resume />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;