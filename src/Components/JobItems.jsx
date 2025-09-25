function JobItems(props){

    return (
        <div className={`timeline-item ${props.align}`} data-aos={props.animation}>
            <div className="content">
                <h5 className="responsive-year">{props.year}</h5>
                <h3 className="Experience-title">{props.title}</h3>
                <h5 className="Job-Location">{props.location}</h5>
                <p className="Job-Description">{props.description}</p>
            </div>
            <span className="year">{props.year}</span> 
        </div>
    )

}

export default JobItems;