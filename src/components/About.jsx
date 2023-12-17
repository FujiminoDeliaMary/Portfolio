import React from "react";
import delia from '../assets/TFK.jpg'

const About = () =>{

    return <section className="about">

        <h2 className="about__title">About Me</h2>

        <div className="about__content">
             <img src={delia} alt="" className="about__profile"/>
             <div className="about__speaking">
                <p >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus praesentium non molestiae dolores numquam, consequuntur eum? Aperiam placeat beatae quam error, optio quis, incidunt fugiat dolore eaque, facilis eligendi?
                 </p>
                 <div className="about__actions">
                    <p className="about__contact">Contact Me</p>
                    <p className="about__cv">Download CV</p>
                 </div>
             </div>
            
        </div>
       
    </section>
}

export default About;