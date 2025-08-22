import Headers from "./Headers";
import Aboutme from "../Assets/Images/Aboutme.png";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe(){

    useEffect(
        () => {
                AOS.init({ duration: 1000, once: true });
              }, 
            [])

    return (

        <div className="AboutMe" >
            <div className="Image-Section" data-aos="fade-up">
                <img src={Aboutme} alt="This is also me again!" />
            </div>

            <div className="Content-Section" data-aos="fade-up" >
                <Headers name="Learn About me"/>
                <h5>Powered by Java, peanut butter, and curiosity.</h5>
                <p className="para-content"> 
                    Contrary to popular belief, Software Engineers don’t just sit in dark rooms talking to computers all day—I talk to people too. <span className="font-weight">I’m Keerthana, a Backend Developer</span> who fell in love with clean <span className="font-weight">APIs and efficient systems</span> (and sometimes with well-named variables, though that’s rare). My journey began with <span className="font-weight">Java and Spring Boot</span>, and ever since, I’ve been building things that work so smoothly they almost look like magic—except it’s just a lot of debugging and caffeine.
                </p>
                <p className="para-content">
                    When I’m not writing code, I’m probably refactoring my Spotify playlists, convincing myself “just one more peanut butter spoon” is fine, or plotting how not to push to production on a Friday (we all know how that ends). My superpower? Turning <span className="font-weight">complex problems into neat solutions</span>—while still managing to laugh at the chaos of tech life.
                </p>
            </div>
        </div>
    )
}

export default AboutMe;