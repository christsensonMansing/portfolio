import "./App.css";
import AboutMe from "./pages/AboutMe.jsx";
import Blog from "./pages/Blog.jsx";
import Hero from "./pages/Hero.jsx";
import Projects from "./pages/Projects.jsx";
import { Routes, Route } from "react-router-dom";
import SBMA from "./pages/SBMA.jsx";
import NationalMuseum from "./pages/NationalMuseum.jsx";
import QMC from "./pages/QMC.jsx";
import BSP from "./pages/BSP.jsx";
import Hytec from "./pages/Hytec.jsx";
import MMDA from "./pages/MMDA.jsx";
import LRT from "./pages/LRT.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sbma" element={<SBMA />} />
        <Route path="/national-museum" element={<NationalMuseum />} />
        <Route path="/quezon-memorial-circle" element={<QMC/>} />
        <Route path="/bangko-sentral" element={<BSP/>} />
        <Route path="/hytec" element={<Hytec/>} />
        <Route path="/mmda" element={<MMDA/>} />
        <Route path="/lrt" element={<LRT/>} />
      </Routes>
    </>
  );
}

export default App;
