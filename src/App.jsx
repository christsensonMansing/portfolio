
import './App.css'
import AboutMe from './pages/AboutMe.jsx'
import Hero from './pages/Hero.jsx'
import { Routes, Route  } from 'react-router-dom'

function App() {

  return (
    <>    
      <Routes>
        <Route  path='/' element={ <Hero/>}/>
        <Route  path='/about-me' element={ <AboutMe/>}/>
      </Routes>
     
      
    </>
  )
}

export default App
