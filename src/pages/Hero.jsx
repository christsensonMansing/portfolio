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
            <a href="/web-projects">
              <button className="see-projects-btn">See projects</button>
            </a>
            <a
              href="https://drive.google.com/file/d/1POutxx3CvEw2Pb-rFSmARykvHCc7c-9k/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="work-with-me-btn">View CV</button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Hero;
