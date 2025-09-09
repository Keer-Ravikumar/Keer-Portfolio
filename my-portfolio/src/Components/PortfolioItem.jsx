import Button from "./Button";

function PortfolioItem(props){
    return(
        <div className="Portfolio-Item" data-aos={props.animation}>
            <img src={props.imagePath} alt={props.altname} />
            <div className="flex-title">
                <p>{props.projectTitle}</p>
                <Button name="→" />
            </div>
        </div>
    )
}

export default PortfolioItem;