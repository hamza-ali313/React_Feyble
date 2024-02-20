import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Spa from "./components/Spa/Spa";
import About from "./components/About";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);

  const location = useLocation();

  // Define a variable to track whether to show the header or not
  const showHeader = location.pathname !== "/";

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="spa" element={<Spa />} />
      </Routes>
    </>
  );
}

export default App;
