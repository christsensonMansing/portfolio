import Navigation from "../components/Navigation.jsx";
import "../assets/styles/projects.css";
import pokedex from "../assets/project-imgs/pokedex.png";
import cinemaImg from "../assets/project-imgs/cinema-booking.png";
import coffeStationImg from "../assets/project-imgs/coffee-station.jpg";
import lmsImg from "../assets/project-imgs/anhs-lms.jpg";
import githubIcon from "../assets/github.svg";
import Footer from "../components/Footer.jsx";

export default function Projects() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="projects-container">
          <h1>
            Website <span>Projects</span>
          </h1>
          <p className="projects-description">
            A collection of web apps and tools I&apos;ve built — showcasing my
            skills in frontend development, UI design, and problem-solving. Each
            project reflects a step forward in my learning journey.
          </p>

          <div className="project-card">
            <div className="img-wrapper">
              <img src={pokedex} alt="" />
            </div>
            <div className="details">
              <h3>
                Poké<span>dex</span>
              </h3>
              <p>
                A dynamic Pokédex app that lets users browse, search, and view
                details of Pokémon using data from the PokéAPI. It also includes
                functions such as building your dream pokémon team as well as
                battling pokémons one on one!
              </p>
              <div className="project-footer">
                <div className="tech-stack">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>React.js</p>
                </div>
                <div className="right-footer">
                  <a
                    href="https://github.com/christsensonMansing/pokedex-rivero.git"
                    target="blank"
                  >
                    <button>
                      <img src={githubIcon} alt="" />
                    </button>
                  </a>
                  <a href="https://pokedex-rivero.netlify.app" target="_blank">
                    <button>Live demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="img-wrapper">
              <img src={cinemaImg} alt="" />
            </div>
            <div className="details">
              <h3>
                Cinema Booking <span>System</span>
              </h3>
              <p>
                A full-featured web application that allows users to browse
                movies, view showtimes, choose seats, and book tickets in real
                time. Designed with a clean interface and efficient seat
                management to ensure a smooth and intuitive booking experience.
              </p>
              <div className="project-footer">
                <div className="tech-stack">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>Php</p>
                </div>
                <div className="right-footer">
                  <a
                    href="https://github.com/christsensonMansing/Skylark-Cinema-Booking-System.git"
                    target="blank"
                  >
                    <button>
                      <img src={githubIcon} alt="" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="img-wrapper">
              <img src={coffeStationImg} alt="" />
            </div>
            <div className="details">
              <h3>
                Time in/out <span>System</span>
              </h3>
              <p>
                A touchless attendance system using face recognition and QR code
                scanning to track employee time in and out. Employees can clock
                in/out by scanning their QR code or using facial recognition,
                ensuring accurate and secure time tracking.
              </p>
              <div className="project-footer">
                <div className="tech-stack">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>Bootstrap</p>
                  <p>Django</p>
                </div>
                <div className="right-footer">
                  <a
                    href="https://github.com/christsensonMansing/coffee-station.git"
                    target="blank"
                  >
                    <button>
                      <img src={githubIcon} alt="" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="img-wrapper">
              <img src={lmsImg} alt="" />
            </div>
            <div className="details">
              <h3>
                Learning Management <span>System</span>
              </h3>
              <p>
                A platform for high school education in the Philippines,
                allowing admins to manage classes, teachers to create
                assignments and quizzes, and students to submit work. Features
                include file conversions, third-party quiz integrations, and
                automated grading.
              </p>
              <div className="project-footer">
                <div className="tech-stack">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>Bootstrap</p>
                  <p>Django</p>
                </div>
                <div className="right-footer">
                  <a
                    href="https://github.com/christsensonMansing/ANHS-LMS.git"
                    target="blank"
                  >
                    <button>
                      <img src={githubIcon} alt="" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
