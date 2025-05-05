import "../assets/styles/about-me.css";
import hero from "../assets/about-me-pic.jpg";
import Navigation from "../components/Navigation.jsx";
import location from "../assets/location.svg";
import graduation from "../assets/graduation.svg";
import job from "../assets/job.svg";
import phone from "../assets/phone.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import bootstrap from "../assets/bootstrap.svg";
import php from "../assets/php.svg";
import django from "../assets/django.svg";
import react from "../assets/react.svg";
import figma from "../assets/figma.svg";
import mysql from "../assets/mysql.svg";
import Footer from "../components/Footer.jsx";

const AboutMe = () => {
  return (
    <div>
      <Navigation />

      <div className="main-container">
        <div className="container">
          <div className="image-container">
            <img src={hero} alt="" />
          </div>
          <div className="right-side">
            <h1>
              About <span>me</span>
            </h1>
            <hr />
            <p>
              A website developer that enjoys building reliable websites and
              tackling problems with smart code solutions. Let&apos;s make
              something happen!
            </p>
            <div className="about-me-card">
              <div className="">
                <img src={location} alt="" />
                Cawit, Zamboanga City, Philippines
              </div>
              <div className="">
                <img src={graduation} alt="" />
                Western Mindanao State University
              </div>
              <div className="">
                <img src={phone} alt="" />
                +63 936-790-4376
              </div>
              <div className="">
                <img src={job} alt="" />
                InnovateSphere Technologies
              </div>
              <div className="">
                <h1>2+</h1>
                Years of software development
              </div>
            </div>
          </div>
        </div>
        <h1 className="tech-stack">
          Teck <span>Stack</span>
        </h1>
        <div className="skills-container">
          <div className="skill-card">
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
          <div className="skill-card">
            <img src={css} alt="" />
            <p>CSS</p>
          </div>
          <div className="skill-card">
            <img src={javascript} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <img src={bootstrap} alt="" />
            <p>Bootstrap</p>
          </div>
          <div className="skill-card">
            <img src={figma} alt="" />
            <p>Figma</p>
          </div>
          <div className="skill-card">
            <img src={php} alt="" />
            <p>PHP</p>
          </div>
          <div className="skill-card">
            <img src={django} alt="" />
            <p>Django</p>
          </div>
          <div className="skill-card">
            <img src={react} alt="" />
            <p>React.js</p>
          </div>
          <div className="skill-card">
            <img src={mysql} alt="" />
            <p>MySQL</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutMe;
