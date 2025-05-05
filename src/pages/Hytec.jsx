import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../assets/styles/blog-view.css";
import sbma from "../assets/blog-imgs/sbma.jpg";
import nationalMuseum from "../assets/blog-imgs/national-museum.jpg";
import qmc from "../assets/blog-imgs/qmc.jpg";
import bsp from "../assets/blog-imgs/bsp.jpg";
import hytec from "../assets/blog-imgs/hytec.jpg";
import mmda from "../assets/blog-imgs/mmda.jpg";
import lrt from "../assets/blog-imgs/lrt.jpg";

export default function Hytec() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="blog-view-container">
          <div className="left-side">
            <img className="main-img" src={hytec} alt="" />
            <h2>
              I mean, <span>Hytec Power Inc.</span>
            </h2>
            <p>
              Our visit to Hytec Power Inc. opened our eyes to the world of
              modern technical education and industry-grade training tools. From
              the moment we stepped into their facility, we were surrounded by
              advanced machinery and training systems used for developing skills
              in engineering, automation, electronics, and more.
            </p>

            <p>
              The staff gave us an in-depth tour of their simulation labs and
              training setups, showcasing how they support schools and training
              centers with real-world equipment for TESDA-aligned programs. We
              saw everything from hydraulic systems and programmable logic
              controllers to automotive and robotics training kits—all designed
              to prepare students for hands-on careers in various technical
              fields.
            </p>

            <p>
              It was inspiring to see how Hytec bridges the gap between
              education and employability, equipping future professionals with
              practical experience through technology. The visit highlighted the
              importance of skills-based learning in today’s evolving job
              market, and gave us a better understanding of what it takes to
              thrive in technical industries.
            </p>
          </div>
          <div className="right-side">
            <h3>Related</h3>

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
                    Exploring the{" "}
                    <span>National Museum of Natural History</span>
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
                    Taking a peak into the{" "}
                    <span>Bank Sentral ng Pilipinas</span>
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
                  <img src={mmda} alt="" />
                </div>
                <div className="details">
                  <h3>
                    Under the hood of{" "}
                    <span>Metropolitan Manila Development Authority</span>
                  </h3>
                  <p>
                    Venturing into the role of the MMDA in the day to day lives
                    of the Filipino peolpe.
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
      </div>
      <Footer />
    </>
  );
}
