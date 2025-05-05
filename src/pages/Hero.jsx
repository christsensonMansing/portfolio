import "../assets/styles/nav.css";
import "../assets/styles/hero.css";
import hero from "../assets/hero-image.png";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

function Hero() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="hero-container">
          <div>
            <h1 style={{ color: "red" }}>Welcome</h1>
            <h1>
              I am <span className="name">Christsenson Mansing</span>
            </h1>
            <p className="hero-p">
              Hey! I&apos;m your neighborhood web developer who loves building
              awesome, responsive websites that look great and work even better.{" "}
            </p>
            <a  href="/projects"><button className="see-projects-btn">See projects</button></a>
            <a href="mailto:someone@example.commailto: christsenonmansing4133@gmail.com" target='_blank'><button className="work-with-me-btn">Work with me</button></a>
          </div>
          <img className="hero-img " src={hero}></img>
        </div>
        <Footer />
      </div>

    </>
  );
}

export default Hero;
