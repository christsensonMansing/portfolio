import '../assets/styles/nav.css'
import '../assets/styles/hero.css'
import hero from '../assets/hero-image.png'
import Navigation from "../components/Navigation"

function Hero() {

  return (
    <>  
      <Navigation/>

      <div className='hero-container'>
        <div>
          <h1 style={{color: "red" }}>Welcome</h1>
          <h1>I am <span className='name'>Christsenson Mansing</span></h1>
          <p className='hero-p'>Hey! I'm your neighborhood web developer who loves building awesome, responsive websites that look great and work even better. I’m all about bringing ideas to life and creating stuff people enjoy using.</p>
          <button>See projects</button>
          <button>Work with me</button>
        </div>
        <img src={hero}></img>
      </div>
    </>
  )
}

export default Hero