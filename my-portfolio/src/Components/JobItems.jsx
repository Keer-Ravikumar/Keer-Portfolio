import ExperienceTitle from "./ExperienceTitle";
import JobLocation from "./JobLocation";
import JobDesc from "./JobDesc";
import JobYear from "./JobYear";

function JobItems(props){

    return (
        <div className={`timeline-item ${props.align}`} data-aos={props.animation}>
            <div className="content">
                <ExperienceTitle name={props.title} />
                <JobLocation location={props.location} />
                <JobDesc description={props.description} />
            </div>
            <JobYear year={props.year} />
        </div>
    )

}

export default JobItems;