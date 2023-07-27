import "../styles/Navbar.css";
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger menu icon

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<nav className="nav">
			<h1><a href="#home">Olaoluwa Adegoke</a></h1>

			<ul className= {click ?  "nav-items active" : "nav-items"}> 
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contacts">Contacts</a></li>
			</ul>

			<div className="collapse-show-menu" onClick={ handleClick }>
				{click ? (
					<FaTimes size={20}/> // show the x icon if clicked
				) : (
					<FaBars size={20}/> // else show the hamburger icon
				)};
				
			</div>
		</nav>
	)
}

export default Navbar;