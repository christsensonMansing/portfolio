import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className='nav-bar'>
        <a className='website-name' href="/"><h1>Mansing.<span className='name'>co</span></h1></a>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/about-me" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About Me
        </NavLink>
        <a>Projects</a>
        <a>Skills</a>
        <a>Contacts</a>
      </nav>
    </div>
  )
}

export default Navigation
