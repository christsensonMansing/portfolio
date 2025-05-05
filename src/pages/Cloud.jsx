import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../assets/styles/certificates-view.css";

export default function Cloud() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="certificates-container">
          <h2>
            Clo<span>ud</span>
          </h2>

          <div className="certificate-card">
            <h2>Cloud Computing: Understanding <span>Core Concepts</span></h2>
            <p>1 hour 23 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1e0JCXiE30obESa3I3kbQjFuMi1Zqn0PQ/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>Hands-On Development in <span>AWS</span></h2>
            <p>12 hours 23 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1ropjISimiDzj1DaklKVOFe9dLxOliGlW/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>AWS Certified <span>AI Practitioner (AIF-C01) Cert Prep </span></h2>
            <p>5 hours 42 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/15WE_PaI--XANuqx9yzy8x7J3c8Hb6kvf/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>Prepare for the AWS Certified Cloud Practitioner (CLF-C02) Certification</h2>
            <p>4 hours 32 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1vJa90OuHuMg5c5YPQol7R9R5H0dqPn-V/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
