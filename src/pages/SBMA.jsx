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

export default function SBMA() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="blog-view-container">
          <div className="left-side">
            <img className="main-img" src={sbma} alt="" />
            <h2>
              Visit to <span>Subic Bay Metropolitan Authority</span>
            </h2>
            <p>
              Our visit to the Subic Bay Metropolitan Authority (SBMA) was more
              than just a field trip—it was a deep dive into how a special
              economic zone operates at multiple levels, from heritage
              preservation to governance and trade. Each stop throughout the day
              offered us a unique perspective on how Subic balances industry,
              community, and culture.
            </p>

            <p>
              We began our journey at the <strong>SBMA Museum</strong>, where we
              were welcomed with exhibits showcasing the area&apos;s rich naval
              history and transformation from a former U.S. naval base into a
              bustling freeport zone. The museum told the story of resilience
              and strategic development, giving us a strong historical
              foundation for the rest of the tour.
            </p>

            <p>
              Next, we visited SBMA’s{" "}
              <strong>Law Enforcement Department</strong>—their version of a
              local authority or governing police unit. Here, we learned about
              how security and order are maintained within the Freeport Zone.
              The officers shared insights on their roles in enforcing local
              regulations, handling emergencies, and supporting both residents
              and businesses.
            </p>

            <p>
              One of the most fascinating parts of our visit was the{" "}
              <strong>SBMA Port Control Tower</strong> (likely under their
              Seaport or Operations Division). From the observation deck, we got
              a panoramic view of Subic Bay and saw firsthand how cargo
              operations are monitored and managed. It was incredible to see how
              organized and technology-driven port activities are, reminding us
              of the vital role logistics plays in trade and development.
            </p>

            <p>
              After a packed day of learning, we wrapped up with a relaxed
              stroll along one of SBMA’s scenic bay areas. The calm waters,
              salty breeze, and open skies offered a perfect contrast to the
              structured and informative parts of the day. Some of us stopped by
              a local grocery store inside the Freeport—small but lively, and
              reflective of the self-sustaining nature of the community here.
            </p>

            <p>
              This trip opened our eyes to the behind-the-scenes systems that
              keep an economic zone like SBMA running efficiently. It was a
              reminder that real-world learning often happens outside the
              classroom—and that even places designed for business and industry
              are deeply tied to culture, community, and everyday life.
            </p>
          </div>
          <div className="right-side">
            <h3>Related</h3>

            <div className="blog-cards-container">

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
