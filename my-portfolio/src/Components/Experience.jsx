import Headers from "./Headers";
import SubHeading from "./SubHeading";
import JobItems from "./JobItems";
import AOS from 'aos';

function Experience(){


    return (
        <div className="timeline-section">
            <Headers name="My Resume"/>
            <SubHeading name="Education and Working Experience" />

            <div className="timeline">
                <JobItems 
                    align="left"
                    title="Bachelors in Computer Science and Education"
                    location="Visveswaraya Technological University | Bangalore"
                    description="Coursework - Algorithms and Data Structures, Database Management System, Computer Networks, Software Engineering, Object Oriented Programming (Java), Machine Learning and Artificial Intelligence"
                    year="Aug 2017 - July 2021"
                    animation="fade-left"
                />

                <JobItems
                    align="right" 
                    title="Full-stack Web Developer Intern"
                    location="Princeton Smart Engineers | Bangalore"
                    description="Completed a full-stack web development internship, building a dynamic e-commerce website from scratch. Utilized HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL to develop responsive user interfaces and backend functionalities."
                    year="Jan 2020 - Oct 2020"
                    animation="fade-right"
                />

                <JobItems data-aos="fade-right"
                    align="right"
                    title="Associate Automation and Test Engineer Intern "
                    location="HeadSpin, Inc | Bangalore"
                    description="Built automated API test suites using Java, Selenium, TestNG, achieving 80%+ coverage on key mobile workflows. Contributed to 8 technical PoCs for enterprise clients and gained hands-on experience with Java Spring and mobile performance testing."
                    year="Apr 2021 - Jun 2021"
                    animation="fade-right"
                />

                <JobItems data-aos="fade-right"
                    align="right"
                    title="Full-stack Software Developer"
                    location="Mercedes Benz Research and Development India | Bangalore"
                    description="Developed and optimized Spring Boot microservices handling 50K+ daily requests, improving API performance by 35% and ensuring 99%+ uptime. Led code quality initiatives and built internal tools, while collaborating cross-functionally to deliver 15+ features across European markets."
                    year="Aug 2021 - Dec 2023"
                    animation="fade-right"
                />

                <JobItems data-aos="fade-up"
                    align="left"
                    title="Masters in Computer Software Engineering"
                    location="Arizona State University | Tempe, Arizona"
                    description="Coursework - Advanced Algorithms and Data structures, Internet of Things, Software Agility, Software Verification, Validation and Testing, Mobile Developement, Data Processing on Scale"
                    year="Jan 2024 - Dec 2025"
                    animation="fade-left"
                />
            </div>
        </div>
    )

}

export default Experience;