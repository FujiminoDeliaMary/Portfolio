import React from "react";
import profil from '../assets/profil.png'
import { Link } from "react-scroll";

const About = () =>{

    return <section className="about" id="about" >

        <h2 className="about__title" data-aos="zoom-out">Mon histoire</h2>

        <div className="about__content">
             <img src={profil} alt="" className="about__profile" data-aos="fade-down-right"/>
            <div className="about__speaking" data-aos="zoom-out">
            <p>Je suis actuellement étudiante à La Rochelle, en pleine formation pour devenir développeuse FullStack, et j'ai 18 ans. Mon domaine de spécialisation couvre les technologies du web, incluant le CSS, le JavaScript, le HTML, ainsi que divers frameworks et outils dédiés au développement front-end et back-end. Ma passion pour ce domaine remonte à quatre ans déjà. Si je devais me comparer à une technologie,
                 je choisirais sans hésiter ReactJs pour son caractère innovant, sa fiabilité, sa capacité d'adaptation et son potentiel surprenant.</p>
                <br></br>
                <p>Au-delà de ma casquette de développeuse, je suis une personne aux intérêts variés, passionnée par la musique, le cinéma, les mangas et la mythologie grecque. Je serais ravie d'apporter ma contribution à votre équipe si mon profil retient votre attention.</p><br></br>
                
                 <div className="about__actions">
                    <p className="about__contact"><Link to='#contact'>Me contacter</Link></p>
                   <p className="about__cv"> <a href="./CVTSENE.pdf" download="CV.pdf">Télécharger mon CV</a></p>
                 </div>
             </div>
            
        </div>
       
    </section>
}

export default About;