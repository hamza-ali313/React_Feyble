import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About.jsx";
import Spa from "./pages/Spa/Spa";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Studio from "./pages/Studio/Studio.jsx";
import Cafe from "./pages/Cafe/Cafe.jsx";
import Comunity from "./pages/Compunity/Comunity.jsx";
import Members from "./pages/Member/Member.jsx";
import Merch from "./pages/Merchandise/Merchandise.jsx";
import HostEvent from "./pages/HostEvent/HostEvent.jsx";
import SiteMap from "./pages/SiteMap/SiteMap.jsx";
import Contact from "./pages/Contact/Contact.jsx";

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
        <Route path="spa" element={<Spa />} />
        <Route path="studio" element={<Studio />} />
        <Route path="cafe" element={<Cafe />} />
        <Route path="about" element={<About />} />
        <Route path="comunity" element={<Comunity />} />
        <Route path="member" element={<Members />} />
        <Route path="merch" element={<Merch />} />
        <Route path="host_event" element={<HostEvent />} />
        <Route path="site_map" element={<SiteMap />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
