import Logo from '../Assets/Images/Logo1.png';

function Navbar(){

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
        </nav>
    )
}

export default Navbar;