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

export default function LRT() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="blog-view-container">
          <div className="left-side">
            <img className="main-img" src={lrt} alt="" />
            <h2>
              The <span>LRT experience</span>
            </h2>
            <p>
              Our trip with the LRT Line 2 began with a short but meaningful
              ride from Santolan Station to the last two stops—an experience
              that gave us a feel for the daily commute many Metro Manila
              residents take. Riding the train allowed us to appreciate the
              efficiency and structure of one of the city&apos;s major mass transit
              systems.
            </p>

            <p>
              After the ride, we were brought to the LRT&apos;s depot and maintenance
              facility, where we got an exclusive look at how the trains are
              kept in top shape. From repairs and inspections to heavy-duty
              overhauls, the warehouse tour gave us a better understanding of
              the effort that goes into keeping public transport safe and
              reliable.
            </p>

            <p>
              We capped off the visit at their control center—a hub of real-time
              coordination and system management. With screens displaying live
              train locations and operations data, the control room showcased
              how technology and teamwork are used to monitor movement and
              ensure safety across the line.
            </p>

            <p>
              The entire visit gave us a well-rounded view of the LRT’s
              operations—from riding the system ourselves to seeing the backbone
              that keeps it all running smoothly.
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

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
