import BannerImage from "../Assets/Images/Banner.png";
import MyImage from "../Assets/Images/Me.png";
import Button from "./Button";

function Banner(){

    return (
        <div className="Banner-Div">
            <div className="left-side">
                <div className="Title">
                    <h4>I'm</h4>
                    <h2>Keerthana Ravikumar</h2>
                    <h3>Full-Stack Developer</h3>
                </div>
                <div className="button-group">
                    <Button name = "Download Resume"/>
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