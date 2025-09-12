function Skills(props){

    return (
        <div className="Skill-item">
            <img src={props.img_path} alt={props.img_alt} />
            <p class="Skill-title">{props.skill_title}</p>
        </div>
    )
}

export default Skills;