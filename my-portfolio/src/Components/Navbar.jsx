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
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Contact Me</li>
                </ul>
            </div>
            
            {isOpen &&
                        <div>
                            <ul className="nav-links">
                                <li>Home</li>
                                <li>About Me</li>
                                <li>Skills</li>
                                <li>Education</li>
                                <li>Experience</li>
                                <li>Contact Me</li>
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