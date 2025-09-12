import Logo from '../Assets/Images/Logo1.png';
import React, { useState } from 'react';

function Navbar(){

    const [isOpen, setOpen] = useState(false);

    function handleToggle(){
        setOpen(!isOpen);
    }

    return (
        <nav className="navBar">
            <div className="logo"> 
                <img src={Logo} alt="KR Logo" />
            </div>
            <div>
                <ul className="nav-group">
                    <a href='#home' ><li>Home</li></a>
                    <a href='#aboutme'><li>About Me</li></a>
                    <a href='#skills'><li>Skills</li></a>
                    <a href='#education'><li>Education</li></a>
                    <a href='#experience'><li>Experience</li></a>
                    <a href='#contact'><li>Contact Me</li></a>
                </ul>
            </div>
            
            {isOpen &&
                        <div>
                            <ul className="nav-links">
                                <a href='#home' ><li>Home</li></a>
                                <a href='#aboutme'><li>About Me</li></a>
                                <a href='#skills'><li>Skills</li></a>
                                <a href='#education'><li>Education</li></a>
                                <a href='#experience'><li>Experience</li></a>
                                <a href='#contact'><li>Contact Me</li></a>
                            </ul>
                        </div>
            }

            <div className="hamburger" onClick={handleToggle}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </div>
        </nav>
    )
}

export default Navbar;