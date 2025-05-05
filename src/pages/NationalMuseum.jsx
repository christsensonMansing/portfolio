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

export default function NationalMuseum() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="blog-view-container">
          <div className="left-side">
            <img className="main-img" src={nationalMuseum} alt="" />
            <h2>
              Exploring the <span>National Museum of Natural History</span>
            </h2>
            <p>
              Our visit to the National Museum of Natural History was a journey
              through the wonders of the Philippines’ biodiversity and natural
              heritage. The moment we stepped into the iconic building in
              Manila, we were greeted by the stunning “Tree of Life” structure—a
              fitting symbol for a museum dedicated to preserving and educating
              about the environment.
            </p>

            <p>
              Inside, we explored various exhibits that showcased the country’s
              rich ecosystems, from mountain ranges to coral reefs. The displays
              were not only visually engaging but also packed with valuable
              scientific information, helping us better understand how natural
              forces and living organisms interact across the archipelago.
            </p>

            <p>
              One of the highlights was the gallery featuring the majestic
              skeleton of Lolong, the world’s largest crocodile in captivity.
              Seeing it up close sparked conversations about conservation
              efforts and human-wildlife interaction in the Philippines. Other
              galleries featured preserved specimens, interactive dioramas, and
              educational materials about flora, fauna, and geology.
            </p>

            <p>
              More than just a passive viewing experience, the museum encouraged
              us to reflect on our role in protecting the environment. It was a
              reminder that science and history come alive when we see, touch,
              and learn outside of our textbooks.
            </p>

            <p>
              By the end of the tour, we left not only with beautiful photos and
              fun memories, but also with a deeper appreciation for the natural
              world and the efforts being made to preserve it for future
              generations.
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
