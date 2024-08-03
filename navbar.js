import React from 'react';
// import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
        <header>
        <h1 className="logo">SecureHome</h1>
        <nav>
            <ul className="nav__links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#service">Services</a></li>
                {/* <!-- <li><button className="login"><a href="login.html">Login</a></button></li> --> */}
            </ul>
        </nav>
    </header>
        </>
    )
}

export default Navbar;