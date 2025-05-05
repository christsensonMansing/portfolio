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

export default function MMDA() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="blog-view-container">
          <div className="left-side">
            <img className="main-img" src={mmda} alt="" />
            <h2>
              Under the hood of{" "}
              <span>Metropolitan Manila Development Authority</span>
            </h2>
            <p>
              Our visit to the MMDA’s new headquarters gave us a
              behind-the-scenes look at how Metro Manila is monitored and
              managed in real time. One of the highlights was stepping into
              their state-of-the-art control room, where a massive digital
              screen displayed live feeds from key areas across the city. It
              felt like being at the center of Metro Manila’s traffic and
              emergency response operations.
            </p>

            <p>
              We learned how MMDA uses advanced surveillance systems and data
              analytics to oversee traffic flow, respond to incidents, and
              coordinate with other agencies to keep the metro moving. The
              presenter walked us through how everything works and answered our
              questions, giving us insight into the challenges of urban
              management and how technology plays a key role in decision-making.
            </p>

            <p>
              The experience gave us a better appreciation for the complexity of
              city operations and how much coordination is needed behind the
              scenes to keep things running smoothly. It was a unique
              opportunity to see public service and innovation come together in
              action.
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
