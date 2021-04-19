import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars, FaGlobeAfrica  } from "react-icons/fa";
// import { Button } from './Button';
import { Link } from 'react-router-dom';

import './navbar.css';
const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        console.log(!click);
    }
  const closeMobileMenu= ()=>{
      setClick(!click)
  }
    



    return (
        <>
            <nav className="navbar" >
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" >Travelling <FaGlobeAfrica className="flogo" /></Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? "navmenu active" : "navmenu"}>
                        <li className="nav-item"><Link to="/" onClick={closeMobileMenu} className="navlink">Home</Link></li>
                        <li className="nav-item"><Link to="/Products" onClick={closeMobileMenu} className="navlink">Products</Link></li>
                        <li className="nav-item"><Link to="/Services" onClick={closeMobileMenu} className="navlink">Services</Link></li>
                        <li className="nav-item"><Link to="/AboutUS" onClick={closeMobileMenu} className="navlink">About US</Link></li>
                        <li className="nav-item"><Link to="/SignUp" onClick={closeMobileMenu} className="navlink">Sign Up</Link></li>
                    </ul>
                </div>
            </nav >
            <br />
        </>


    )

}
export default Navbar