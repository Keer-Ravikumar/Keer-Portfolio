import MyImage from "../Assets/Images/Me.png";
import Button from "./Button";
import Typewriting from "./Typewriting";

function Banner(){

    return (
        <div className="Banner-Div">
            <div className="left-side">
                <div className="Title">
                    <h5>I'm</h5>
                    <h2>Keerthana Ravikumar</h2>
                    <Typewriting />
                </div>
                <div className="button-group">
                    <Button name = "View Resume"/>
                    <Button name = "Contact Me" />
                </div>
            </div>

            <div className="right-side">
                <img src={MyImage} alt="That is me!" />
            </div>
        </div>
    )
}

export default Banner;