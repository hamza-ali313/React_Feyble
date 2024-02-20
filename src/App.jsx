import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import About from './components/About';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion"
import Header from './components/Header';
import Footer from './components/Footer/Footer';
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer/>

    </>
  )
}

export default App
