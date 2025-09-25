import Navigation from "../components/Navigation.jsx";
import "../assets/styles/projects.css";
import udemy from "../assets/project-imgs/udemy.png";
import trello from "../assets/project-imgs/trello.webp";
import Footer from "../components/Footer.jsx";

export default function Projects() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="projects-container">
          <h1>
            Software Testing <span>Projects</span>
          </h1>
          <p className="projects-description">
            A collection of my testing projects that highlight my growth and
            hands-on experience in ensuring software quality. Each piece
            reflects my commitment to learning and improving in QA.
          </p>

          <div className="project-card">
            <div className="img-wrapper">
              <img src={udemy} alt="" />
            </div>
            <div className="details">
              <h3>
                Test Scenarios and Case Writing – <span>Udemy Project </span>
              </h3>
              <p>
                Developed test scenarios and test cases using Trello and Google
                Sheets for the major modules of Udemy as part of a comprehensive
                software testing course, focusing on identifying functional
                requirements and ensuring thorough coverage for quality
                assurance.
              </p>
              <div className="project-footer">
                <div className="tech-stack">
                  <p>Trello</p>
                  <p>Google Sheets</p>
                </div>
                <div className="right-footer">
                  <a
                    href="https://trello.com/invite/b/688adc0e8e1700ec7b0fd31f/ATTIe54d1888785d75b15eae3011b3ec812c34B45C5B/udemy-site-testing"
                    target="_blank"
                  >
                    <button>Test Scenarios Link &gt;</button>
                  </a>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1ux5pCcM9d2C-wzdEtdhhU2D2c_t1jKX60usvchS_lUc/edit?usp=sharing"
                    target="_blank"
                  >
                    <button>Test Cases Link &gt;</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="img-wrapper">
              <img src={trello} alt="" />
            </div>
            <div className="details">
              <h3>
                <span>Trello</span> API Testing
              </h3>
              <p>
                Performed basic functional testing on Trello&apos;s API using
                Postman to verify endpoints, validate responses, and ensure
                correct data handling as part of hands-on API testing practice.
              </p>
              <div className="project-footer">
                <div className="tech-stack">
                  <p>Postman</p>
                </div>
                <div className="right-footer">
                  <a
                    href="https://documenter.getpostman.com/view/46326961/2sB3BEmVXE"
                    target="_blank"
                  >
                    <button>Postman Collection &gt;</button>
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
