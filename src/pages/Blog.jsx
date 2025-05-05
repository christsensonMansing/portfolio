import Navigation from "../components/Navigation";
import "../assets/styles/blog.css";
import Footer from "../components/Footer";

import sbma from "../assets/blog-imgs/sbma.jpg";
import nationalMuseum from "../assets/blog-imgs/national-museum.jpg";
import qmc from "../assets/blog-imgs/qmc.jpg";
import bsp from "../assets/blog-imgs/bsp.jpg";
import hytec from "../assets/blog-imgs/hytec.jpg";
import mmda from "../assets/blog-imgs/mmda.jpg";
import lrt from "../assets/blog-imgs/lrt.jpg";

export default function Blog() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <div className="blog-container">
          <h1>
            My Tour <span>Blog</span>
          </h1>
          <p className="blog-description">
            A week-long educational tour across Metro Manila, visiting companies
            to explore real-world industry practices and career insights.
          </p>

          <div className="blog-cards-container">
            <div className="blog-card">
              <div className="img-wrapper">
                <img src={sbma} alt="" />
              </div>
              <div className="details">
                <h3>
                  Visit to <span>Subic Bay Metropolitan Authority</span>
                </h3>
                <p>
                  Taking a peak at the infamous growing industries of Subic
                  Metropolitan Autority (SBMA)
                </p>
                <div className="blog-footer">
                  <span>April, 2025</span>
                  <a href="/sbma">
                    <button>Read more</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="img-wrapper">
                <img src={nationalMuseum} alt="" />
              </div>
              <div className="details">
                <h3>
                  Exploring the <span>National Museum of Natural History</span>
                </h3>
                <p>
                  Being mesmerized in the sight of Philippines.&apos; natural
                  histories
                </p>
                <div className="blog-footer">
                  <span>April, 2025</span>
                  <a href="/national-museum">
                    <button>Read more</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="img-wrapper">
                <img src={qmc} alt="" />
              </div>
              <div className="details">
                <h3>
                  A Day at the <span>Quezon Memorial Circle</span>
                </h3>
                <p>
                  Going down the memory lane of Quezon, a journey through
                  history and legacy at the Quezon Memorial Circle.
                </p>
                <div className="blog-footer">
                  <span>April, 2025</span>
                  <a href="/quezon-memorial-circle">
                    <button>Read more</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="img-wrapper">
                <img src={bsp} alt="" />
              </div>
              <div className="details">
                <h3>
                  Taking a peak into the <span>Bank Sentral ng Pilipinas</span>
                </h3>
                <p>
                  Exploring the heart of the nation&apos;s economy, we delved
                  into the history and significance of the Bangko Sentral ng
                  Pilipinas.
                </p>
                <div className="blog-footer">
                  <span>April, 2025</span>
                  <a href="/bangko-sentral">
                    <button>Read more</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="img-wrapper">
                <img src={hytec} alt="" />
              </div>
              <div className="details">
                <h3>
                  I mean, <span>Hytec Power Inc.</span>
                </h3>
                <p>
                  Delving into the innovations of Hytec Power Inc., we learned
                  how the company connects industrial needs with educational
                  advancements.
                </p>
                <div className="blog-footer">
                  <span>April, 2025</span>
                  <a href="/hytec">
                    <button>Read more</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="img-wrapper">
                <img src={mmda} alt="" />
              </div>
              <div className="details">
                <h3>
                  Under the hood of{" "}
                  <span>Metropolitan Manila Development Authority</span>
                </h3>
                <p>
                  Venturing into the role of the MMDA in the day to day lives of
                  the Filipino peolpe.
                </p>
                <div className="blog-footer">
                  <span>April, 2025</span>
                  <a href="/mmda">
                    <button>Read more</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="img-wrapper">
                <img src={lrt} alt="" />
              </div>
              <div className="details">
                <h3>
                  The <span>LRT experience</span>
                </h3>
                <p>
                  Riding through the heart of Metro Manila, we discovered how
                  the LRT system connects communities and supports daily
                  commuters across the city.
                </p>
                <div className="blog-footer">
                  <span>April, 2025</span>
                  <a href="/lrt">
                    <button>Read more</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
