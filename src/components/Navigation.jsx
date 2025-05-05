import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import burger from '../assets/burger.svg';
import close from '../assets/close.svg';
import '../assets/styles/nav.css';

const Navigation = () => {
  useEffect(() => {
    const burgerIcon = document.querySelector('.burger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const nav = document.querySelector('.responsive-nav');

    if (burgerIcon && nav) {
      const toggleNav = () => {
        nav.classList.toggle('show'); 
        burgerIcon.classList.toggle('hide')
      };

      burgerIcon.addEventListener('click', toggleNav);
      closeIcon.addEventListener('click', toggleNav);

      return () => {
        burgerIcon.removeEventListener('click', toggleNav);
        closeIcon.removeEventListener('click', toggleNav);
      };
    }
  }, []); 

  return (
    <div className='nav-container'>
      <nav className='nav-bar'>
        <a className='website-name' href="/"><h1>Mansing.<span className='name'>co</span></h1></a>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/about-me" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Me</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
        <img className='burger-icon' src={burger} alt="" />
      </nav>

      <div className="responsive-nav">
        <img className='close-icon' src={close} alt="" />
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/about-me" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Me</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
