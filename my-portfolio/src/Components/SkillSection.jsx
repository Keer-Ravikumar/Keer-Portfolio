import Headers from "./Headers";
import SubHeading from "./SubHeading";
import Skills from "./Skills";

import AWS from "../Assets/Images/AWS.png";
import CSS from "../Assets/Images/CSS.png";
import Docker from "../Assets/Images/Docker.png";
import Github from "../Assets/Images/Github.png";
import HTML from "../Assets/Images/HTML.png";
import Java from "../Assets/Images/Java.png";
import JS from "../Assets/Images/JS.png";
import MongoDB from "../Assets/Images/MongoDB.png";
import MySQL from "../Assets/Images/MySQL.png";
import NodeJS from "../Assets/Images/NodeJS.png";
import PHP from "../Assets/Images/PHP.png";
import PostgreSQL from "../Assets/Images/PostgreSQL.png";
import Python from "../Assets/Images/Python.png";
import ReactJS from "../Assets/Images/React.png";
import Springboot from "../Assets/Images/Springboot.png";

function SkillSection(){

    return (
        <div className="SkillSection">
            <Headers name="My Skill Set"/>
            <SubHeading name="What Do I Actually Do?" />

            <div className="Skills-container">
            <Skills 
                img_path = {HTML}
                img_alt = "HTML Logo"
                skill_title = "HTML"
            />

            <Skills 
                img_path = {CSS}
                img_alt = "CSS Logo"
                skill_title = "CSS"
            />

            <Skills 
                img_path = {JS}
                img_alt = "Javascript Logo"
                skill_title = "JS"
            />

            <Skills 
                img_path = {ReactJS}
                img_alt = "React JS Logo"
                skill_title = "React JS"
            />

            <Skills 
                img_path = {Java}
                img_alt = "Java Logo"
                skill_title = "Java"
            />

            <Skills 
                img_path = {Python}
                img_alt = "Python Logo"
                skill_title = "Python"
            />

            <Skills 
                img_path = {Springboot}
                img_alt = "Springboot Logo"
                skill_title = "Springboot"
            />

            <Skills 
                img_path = {PHP}
                img_alt = "PHP Logo"
                skill_title = "PHP"
            />

            <Skills 
                img_path = {NodeJS}
                img_alt = "Node JS Logo"
                skill_title = "NodeJS"
            />

            <Skills 
                img_path = {MySQL}
                img_alt = "MySQL Logo"
                skill_title = "MySQL"
            />

            <Skills 
                img_path = {PostgreSQL}
                img_alt = "PostgreSQL Logo"
                skill_title = "PostgreSQL"
            />

            <Skills 
                img_path = {MongoDB}
                img_alt = "MongoDB Logo"
                skill_title = "MongoDB"
            />

            <Skills 
                img_path = {AWS}
                img_alt = "AWS Logo"
                skill_title = "AWS"
            />

            <Skills 
                img_path = {Docker}
                img_alt = "Docker Logo"
                skill_title = "Docker"
            />

            <Skills 
                img_path = {Github}
                img_alt = "Github Logo"
                skill_title = "Github"
            />

        </div>
        </div>
    )

}

export default SkillSection;