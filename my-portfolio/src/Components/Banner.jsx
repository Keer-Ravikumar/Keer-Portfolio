import MyImage from "../Assets/Images/Me.png";
import Button from "./Button";
import Typewriting from "./Typewriting";

function Banner(){

    return (
        
        <div className="Banner-Div" id="home">
            <div className="left-side">
                <div className="Title">
                    <h5>I'm</h5>
                    <h2>Keerthana Ravikumar</h2>
                    <Typewriting />
                </div>
                <div className="button-group">
                    <a href="../../Resume.pdf" download="Keerthana_Ravikumar_Resume.pdf">
                        <Button name = "View Resume"/>
                    </a>
                    <a href="#contact">
                        <Button name = "Contact Me" />
                    </a>
                </div>
            </div>

            <div className="right-side">
                <img src={MyImage} alt="That is me!" />
            </div>
        </div>
    )
}

export default Banner;