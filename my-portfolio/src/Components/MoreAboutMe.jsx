import SubHeading from "./SubHeading";
import Button from "./Button";
function MoreAboutMe(){

    return(
        <div className="MoreAboutMe" data-aos="fade-up">
            <h3>Fun Fact About me?</h3>
            <SubHeading name="Little Bit of Everything I love" />
            <p>I love exploring both sides of my brain. I paint, sketch, knit, dance, and sing — but I also enjoy optimizing meals like coding projects. Whether with colors, music, or code, I find joy in experimenting, building, and creating something fun from scratch.</p>
            <Button name="Say Hi Anytime!" />

        </div>
    )

}

export default MoreAboutMe;
