import "../assets/styles/nav.css";
import "../assets/styles/hero.css";
// import hero from "../assets/hero-image.png";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

function Hero() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="hero-container">
          <div className="">
            <h1 style={{ color: "red" }}>Welcome</h1>
            <h1>
              I am <span className="name">Christsenson Mansing</span>
            </h1>
            <p className="hero-p">
              My portfolio shows my journey from building websites to diving
              into QA. You&apos;ll find my projects, test cases, API testing
              work, tech skills, and certifications—all things I&apos;m
              passionate about.
            </p>
            <a href="/projects">
              <button className="see-projects-btn">See projects</button>
            </a>
            <a href="../assets/Mansing-CV.pdf" download>
              <button className="work-with-me-btn">Download CV</button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Hero;
