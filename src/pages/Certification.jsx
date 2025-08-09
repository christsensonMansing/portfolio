import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../assets/styles/certificates-view.css";

export default function Certifications() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="certificates-container">
          <h2>
            Certi<span>fications</span>
          </h2>

          <p className="projects-description">
            A collection of my certification/s under my learning path to
            becoming a better software tester.
          </p>

          <div className="certificate-card">
            <h2>
              The Complete 2025 <span>Software Testing Bootcamp</span>
            </h2>
            <p>July 30, 2025</p>
            <p>34.5 Hours</p>
            <p>Udemy</p>
            <a
              href="https://drive.google.com/file/d/1Kd0_Pziwn-SsZeTEkYICrVWYIrmLhCiD/view?usp=sharing"
              target="_blank"
            >
              View certificate
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
