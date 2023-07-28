import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import "../styles/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleNavItemClick = () => {
    setClick(false);
  };



  return (
    <nav className={color ? "nav nav-bg" : "nav"}>
      <h1><Link className={color ? "nav-h1 nav-h1-bg" : "nav-h1"} to="home" spy={true} smooth={true} onClick={handleNavItemClick}>Olaoluwa Adegoke</Link></h1>

      <ul className={click ? "nav-items active" : "nav-items"}>
        <li><Link className={color ? "nav-li nav-li-bg" : "nav-li"} to="home" spy={true} smooth={true} onClick={handleNavItemClick}>Home</Link></li>
        <li><Link className={color ? "nav-li nav-li-bg" : "nav-li"} to="about" spy={true} smooth={true} onClick={handleNavItemClick}>About</Link></li>
        <li><Link className={color ? "nav-li nav-li-bg" : "nav-li"} to="projects" spy={true} smooth={true} onClick={handleNavItemClick}>Projects</Link></li>
        <li><Link className={color ? "nav-li nav-li-bg" : "nav-li"} to="contacts" spy={true} smooth={true} onClick={handleNavItemClick}>Contacts</Link></li>
      </ul>

      <div className="collapse-show-menu" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} /> // show the x icon if clicked
        ) : (
          <FaBars size={20} /> // else show the hamburger icon
        )};
      </div>
    </nav>
  );
}

export default Navbar;
