import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../assets/styles/certificates-view.css";

export default function Backend() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="certificates-container">
          <h2>
            Back <span>end</span>
          </h2>

          <div className="certificate-card">
            <h2>MySQL <span>Data Analysis</span></h2>
            <p>4 hours 30 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1YJmXLxjLwtOGpr-0e9D0wkU4xOIOQLKB/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>Advance your <span>Node.js Skills</span></h2>
            <p>19 hours 45 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1GesIyWRexINw9knbz7t14nv_M1z8zQhy/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>Introduction to <span>Django</span></h2>
            <p>4 hours 34 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1m1bjSj3me5MnIWmmnhsSUYzXPWX4ruxS/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>Become a <span>Django Developer</span></h2>
            <p>9 hours 17 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1sAq_FHUkuT7lGnEQOzakUEGnaA_AbL8x/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>Advance Your Skills as a <span>Django Developer</span></h2>
            <p>8 hours 53 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1Nso9VyE_BHaxqOVq6ni5_1upBIigKKIP/view?usp=drive_link" target="_blank">View certificate</a>
          </div>


          <div className="certificate-card">
            <h2>Learning <span>PHP</span></h2>
            <p>4 hours 41 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1XzFVCu4kTU1J-5Y8g-eHdLx-3OHBFXLq/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>PHP with MySQL Essential Training: 1 <span>The Basics</span></h2>
            <p>5 hours 52 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1N7EAWfiWa2U0u6ZxMdeu7U5N30L6x8v1/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

          <div className="certificate-card">
            <h2>PHP Essential Training</h2>
            <p>4 hours 4 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1s6x_9n-NpQ1QJsG8zaFttcmKFszjrs_W/view?usp=drive_link" target="_blank">View certificate</a>
          </div>


          <div className="certificate-card">
            <h2>Build Your <span>Laravel Skills</span></h2>
            <p>12 hours 16 minutes</p>
            <p>LinkedIn Learning</p>
            <a href="https://drive.google.com/file/d/1GDAvClNFaPic_DaeJO7pPaY1xt3gWK3S/view?usp=drive_link" target="_blank">View certificate</a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

