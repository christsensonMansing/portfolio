import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../assets/styles/certificates-view.css";

export default function DataScience() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="certificates-container">
          <h2>
            Data <span>Science</span>
          </h2>

          <div className="certificate-card">
            <h2>Data Science Foundations: <span>Fundamentals</span></h2>
            <p>5 hours 24 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1p0Rh_-tqd2NCYkUxhQJ5Y4ueFbYOY5Px/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>Excel with Copilot: <span> AI-Driven Data Analysis</span></h2>
            <p>1 hour 32 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1Cn0WU2Gu4aJkU9rSO4SqwxunJNPPfT3j/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
