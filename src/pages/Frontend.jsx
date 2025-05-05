import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../assets/styles/certificates-view.css";

export default function Frontend() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="certificates-container">
          <h2>
            Front <span>end</span>
          </h2>

          <div className="certificate-card">
            <h2>Advance Your Skills in <span>HTML</span></h2>
            <p>26 hours 30 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1GesIyWRexINw9knbz7t14nv_M1z8zQhy/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>Learn <span>CSS</span></h2>
            <p>25 hours 30 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1lFcQEOCx-JPrTr1eHT_99031xlVJkZhq/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>Bootstrap 5 <span>Essential Training</span></h2>
            <p>4 hours 19 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1d-Ud0F6xedKnak-5nRPJXqWjii8Ya1Fv/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>React: Creating and Hosting a <span>Full-
            Stack Site</span></h2>
            <p>4 hours 9 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/10HRawKuVDEnc1qUY5lHGtPAGBvLEqR33/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>React Native <span>Essential Training</span></h2>
            <p>4 hours 20 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1ZqRoKMzIT5cotDYsia_m98ue1lvemUPy/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
