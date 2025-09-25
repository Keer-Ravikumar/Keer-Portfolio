import Headers from "./Headers";
import SubHeading from "./SubHeading";
import PortfolioItem from "./PortfolioItem";
import Encryptus from "../Assets/Images/Encryptus.png";
import UnOriginalThoughts from "../Assets/Images/UnOriginalTHoughts.jpg";
import HomeAuto from "../Assets/Images/HomeAuto.png";
import FRAS from "../Assets/Images/FRAS.png";
import Alufabs from "../Assets/Images/AluFab.png";
import Car from "../Assets/Images/Dashboard.png";


function MyPortfolio(){

    return( 
        <div className="Portfolio-section" id="experience">
            <Headers name="My Portfolio" />
            <SubHeading name="A few pieces of my work" />

            <div className="Portfolio-container" >
                <PortfolioItem
                    imagePath={Encryptus}
                    altname="Project Image"
                    projectTitle="Encryptus"
                    animation="fade-up"
                    link="https://github.com/ManojAvarur/Cloud-Encryption"
                />

                <PortfolioItem
                    imagePath={Alufabs}
                    altname="Project Image"
                    projectTitle="Alufabs Industries"
                    animation="fade-up"
                    link="#"
                />

                <PortfolioItem
                    imagePath={UnOriginalThoughts}
                    altname="Project Image"
                    projectTitle="Unoriginal Thoughts"
                    animation="fade-up"
                    link= "https://github.com/ManojAvarur/Un-Original-Thoughts"
                />


                <PortfolioItem
                    imagePath={FRAS}
                    altname="Project Image"
                    projectTitle="FaceID Attendance System"
                    animation="fade-up"
                    link="https://github.com/Keer-Ravikumar/FRAS"
                />

                <PortfolioItem
                    imagePath={HomeAuto}
                    altname="Project Image"
                    projectTitle="Farmato"
                    animation="fade-up"
                    link="https://github.com/ManojAvarur/Engineering-Final-Year-Project"
                />

                <PortfolioItem
                    imagePath={Car}
                    altname="Project Image"
                    projectTitle="DashBoard Simulator"
                    animation="fade-up"
                    link="https://github.com/manojam46/CAN-Data-Parsing"
                />



                
            </div>

        </div>    
    )
}

export default MyPortfolio;