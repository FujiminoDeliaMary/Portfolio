import React from "react";
import delia from '../assets/TFK.jpg'

const About = () =>{

    return <section className="about" id="about">

        <h2 className="about__title">Mon histoire</h2>

        <div className="about__content">
             <img src={delia} alt="" className="about__profile"/>
             <div className="about__speaking">
                <p>Actuellement entrain de suivre une formation de développeur FullStack à la rochelle, je suis une étudiante de 18 ans qui se spécialise en technologies du web tels que Css, Js, Html et bien d'autres framework et outils de développement
                    front-end et back-end. Pationnée depuis maintenant 4 ans, si je devais me décrire en une technologie, je serais probablement ReactJs, innovante , fiable, en évolution et pleine de surprises.
                </p>
            <br></br>
                <p>N'étant pas qu'une développeuse mais avant tout une humaine, je suis aussi très passionée de tout ce qui touche musique, cinéma, manga et mythologie grecque.
                    Hormis tout cela , je serais très enchantée de travailler avec vous si mon profil vous intéresse.
                </p>
                 <div className="about__actions">
                    <p className="about__contact"><a href="mailto:marilynedelia@gmail.com">Me contacter</a></p>
                   <p className="about__cv"> <a href="../assets/MarilyneCV.pdf" download="CV.pdf">Télécharger mon CV</a></p>
                 </div>
             </div>
            
        </div>
       
    </section>
}

export default About;