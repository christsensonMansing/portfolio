import '../assets/styles/about-me.css'
import hero from '../assets/about-me-pic.jpg'
import Navigation from "../components/Navigation.jsx"

const AboutMe = () => {
  return (
    <div>
      <Navigation/>

      <div className="container">
        <div className="image-container"><img src={hero} alt="" /></div>
        <div className="right-side">
          <h1>About <span>me</span></h1>
          <hr />
          <p>
           I’m a web developer with a passion for crafting sleek, user-friendly websites that not only look great but also deliver seamless experiences. I enjoy solving problems through clean code, optimizing performance, and making the web more accessible. Whether it’s building interactive UI components, improving website responsiveness, or exploring new technologies, I’m always eager to push my skills further.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
