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
import Certifications from "./pages/Certifications.jsx";
import Frontend from "./pages/Frontend.jsx";
import Backend from "./pages/Backend.jsx";
import DataScience from "./pages/DataScience.jsx";
import Cloud from "./pages/Cloud.jsx";
import Git from "./pages/Git.jsx";

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
        <Route path="/quezon-memorial-circle" element={<QMC />} />
        <Route path="/bangko-sentral" element={<BSP />} />
        <Route path="/hytec" element={<Hytec />} />
        <Route path="/mmda" element={<MMDA />} />
        <Route path="/lrt" element={<LRT />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/front-end" element={<Frontend />} />
        <Route path="/back-end" element={<Backend />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/git" element={<Git />} />
      </Routes>
    </>
  );
}

export default App;
