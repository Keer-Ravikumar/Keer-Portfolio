function Skills(props){

    return (
        <div className="Skill-item" data-aos="fade-away">
            <img src={props.img_path} alt={props.img_alt} />
            <p className="Skill-title">{props.skill_title}</p>
        </div>
    )
}

export default Skills;