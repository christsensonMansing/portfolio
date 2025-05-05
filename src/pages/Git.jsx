import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../assets/styles/certificates-view.css";

export default function Git() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="certificates-container">
          <h2>
            Gi<span>t</span>
          </h2>

          <div className="certificate-card">
            <h2>Complete Guide to <span>Git</span></h2>
            <p>7 hours 38 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1W8L0UZA-dWS4njohYeDMM6t6HaG6YD0W/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
