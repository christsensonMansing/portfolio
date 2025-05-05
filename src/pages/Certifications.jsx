import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../assets/styles/certifications.css";
import folder from "../assets/folder.svg";

export default function Certifications() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="certifications-container">
          <h1>
            Cer<span>tifications</span>
          </h1>
          <p className="projects-description">
            A collection of my certifications under my learning path to becoming
            a better software developer.
          </p>

          <a href="/front-end" className="folder">
            <h3>Front end</h3>
            <img src={folder} alt="" />
          </a>

          <a href="/back-end" className="folder">
            <h3>Back end</h3>
            <img src={folder} alt="" />
          </a>

          <a href="/data-science" className="folder">
            <h3>Data Science</h3>
            <img src={folder} alt="" />
          </a>

          <a href="/cloud" className="folder">
            <h3>Cloud</h3>
            <img src={folder} alt="" />
          </a>

          <a href="/git" className="folder">
            <h3>Git</h3>
            <img src={folder} alt="" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
